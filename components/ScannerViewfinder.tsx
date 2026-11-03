"use client";

import { useEffect, useRef, useState } from "react";

const STATUS = {
  idle: "Idle",
  starting: "Starting camera",
  scanning: "Scanning",
  error: "Camera unavailable",
} as const;

type Status = keyof typeof STATUS;

type ScanResult = {
  format: string;
  text: string;
};

export default function ScannerViewfinder() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);

  useEffect(() => {
    const stopStream = () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };

    const frame = animationRef.current;

    return () => {
      stopStream();
      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const startCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("error");
      return;
    }

    setStatus("starting");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      streamRef.current = stream;
      setCameraEnabled(true);
      setStatus("scanning");

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch {
      setStatus("error");
    }
  };

  const toggleTorch = async () => {
    const track = streamRef.current?.getVideoTracks()[0];
    if (!track) return;
    const capabilities = track.getCapabilities?.();
    if (!capabilities || !("torch" in capabilities)) return;

    const newState = !isTorchOn;
    await track.applyConstraints({
      advanced: [{ torch: newState }],
    } as MediaTrackConstraintSet);
    setIsTorchOn(newState);
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.drawImage(img, 0, 0);

      try {
        const { readBarcodes } = await import("zxing-wasm");
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height,
        );
        const barcode = await readBarcodes(imageData, {
          formats: [
            "QRCode",
            "EAN13",
            "UPCA",
            "Code128",
            "Code39",
            "ITF",
            "Codabar",
          ],
        });
        if (barcode[0]) {
          setResult({
            format: barcode[0].format || "Unknown format",
            text: barcode[0].text || "No text decoded",
          });
          setStatus("scanning");
        }
      } catch {
        setStatus("error");
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0E0F13] p-4 text-white">
      <div className="relative overflow-hidden rounded-[28px] border border-lime-400/60 bg-[#101218]">
        <div className="relative h-[520px] w-full">
          <video
            ref={videoRef}
            className={cameraEnabled ? "h-full w-full object-cover" : "hidden"}
            playsInline
            muted
            autoPlay
          />
          {!cameraEnabled && (
            <div className="flex h-full items-center justify-center text-zinc-400">
              Camera preview is off
            </div>
          )}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-lime-400" />
            <div className="absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-lime-400" />
            <div className="absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-lime-400" />
            <div className="absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2 border-lime-400" />
            <div className="absolute left-1/2 top-0 h-[2px] w-[70%] -translate-x-1/2 bg-lime-400 animate-[scan_3s_linear_infinite]" />
          </div>

          <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-400">
            {STATUS[status]}
          </div>

          {result && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5">
              <div
                className="w-[88%] rounded-[18px] border border-zinc-200 bg-[#F2EFE6] p-3 text-zinc-900"
                aria-live="polite"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                      Format
                    </div>
                    <div className="mt-1 font-display text-xl font-bold">
                      {result.format}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-zinc-950 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                  >
                    Copy
                  </button>
                </div>
                <p className="mt-2 text-sm text-zinc-700 break-all">
                  {result.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={startCamera}
          className="rounded-full bg-lime-400 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-950"
        >
          Start camera
        </button>
        <button
          type="button"
          onClick={toggleTorch}
          className="rounded-full border border-white/20 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white"
        >
          {isTorchOn ? "Torch on" : "Torch"}
        </button>
        <label className="cursor-pointer rounded-full border border-white/20 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white">
          Upload image
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>
    </div>
  );
}
