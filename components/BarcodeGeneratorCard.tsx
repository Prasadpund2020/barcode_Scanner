"use client";

import { useEffect, useRef, useState } from "react";

const barcodeOptions = [
  "Code 128",
  "Code 39",
  "EAN-13",
  "UPC-A",
  "ITF",
  "Codabar",
] as const;

export default function BarcodeGeneratorCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [value, setValue] = useState("123456789012");
  const [format, setFormat] =
    useState<(typeof barcodeOptions)[number]>("Code 128");

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      const { default: bwipjs } = await import("bwip-js");
      if (!canvasRef.current || cancelled) return;

      try {
        const normalized = {
          "Code 128": "code128",
          "Code 39": "code39",
          "EAN-13": "ean13",
          "UPC-A": "upca",
          ITF: "itf",
          Codabar: "codabar",
        }[format];
        bwipjs.toCanvas(canvasRef.current, {
          bcid: normalized,
          text: value,
          scale: 2,
          height: 12,
          includetext: true,
          textxalign: "center",
          backgroundcolor: "#ffffff",
          barcolor: "#15161A",
        });
      } catch {
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            ctx.clearRect(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height,
            );
            ctx.fillStyle = "#15161A";
            ctx.font = "16px sans-serif";
            ctx.fillText("Invalid barcode", 10, 20);
          }
        }
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [value, format]);

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#F2EFE6] p-7 text-zinc-950 shadow-[12px_12px_0_#C8FF3D]">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-700">
          Barcode
        </div>
        <div className="flex gap-2">
          {barcodeOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFormat(option)}
              className={[
                "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em]",
                format === option
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 text-zinc-700",
              ].join(" ")}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <label
        htmlFor="barcode-value"
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-700"
      >
        Value
      </label>
      <input
        id="barcode-value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none"
      />

      <div className="mt-8 flex items-center justify-center rounded-[16px] border-[2px] border-zinc-900 bg-white p-5">
        <canvas ref={canvasRef} className="max-w-full" />
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-full bg-zinc-950 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white"
        >
          Download SVG
        </button>
        <button
          type="button"
          className="flex-1 rounded-full border border-zinc-900 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-900"
        >
          PNG
        </button>
      </div>
    </div>
  );
}
