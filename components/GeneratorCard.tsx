"use client";

import { useEffect, useRef, useState } from "react";

type GeneratorType = "url" | "text" | "wifi" | "vcard" | "upi";

const tabs = [
  { value: "url", label: "URL" },
  { value: "text", label: "Text" },
  { value: "wifi", label: "Wi‑Fi" },
  { value: "vcard", label: "vCard" },
  { value: "upi", label: "UPI" },
] as const;

const defaultValues: Record<GeneratorType, string> = {
  url: "https://yourbrand.com/menu",
  text: "Hello Scannow",
  wifi: "WIFI:T:WPA;S:GuestNetwork;P:password123;;",
  vcard:
    "BEGIN:VCARD\nVERSION:3.0\nFN:Jane Doe\nORG:Scannow\nTITLE:Product Lead\nEMAIL:hello@scannow.example\nURL:https://scannow.example\nEND:VCARD",
  upi: "upi://pay?pa=hello@upi&pn=Jane%20Doe&am=250&cu=INR",
};

export default function GeneratorCard() {
  const box = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<GeneratorType>("url");
  const [value, setValue] = useState(defaultValues.url);
  const [fg, setFg] = useState("#15161A");
  const [shape, setShape] = useState<"square" | "dots" | "rounded">("square");
  const [ecc, setEcc] = useState<"L" | "M" | "Q" | "H">("M");

  const changeType = (nextType: GeneratorType) => {
    setType(nextType);
    setValue(defaultValues[nextType]);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      const { default: QRCodeStyling } = await import("qr-code-styling");
      const qr = new QRCodeStyling({
        width: 220,
        height: 220,
        type: "svg",
        data: value,
        margin: 0,
        qrOptions: {
          errorCorrectionLevel: ecc,
        },
        dotsOptions: {
          type: shape,
          color: fg,
        },
        backgroundOptions: {
          color: "#FFFFFF",
        },
      });

      if (box.current) {
        box.current.innerHTML = "";
        qr.append(box.current);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [value, fg, shape, ecc]);

  const label =
    type === "url"
      ? "URL"
      : type === "text"
        ? "Text"
        : type === "wifi"
          ? "Wi‑Fi"
          : type === "vcard"
            ? "vCard"
            : "UPI";

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#F2EFE6] p-7 text-zinc-950 shadow-[12px_12px_0_#C8FF3D]">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-700">
          Generator
        </div>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => changeType(tab.value as GeneratorType)}
              className={[
                "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em]",
                type === tab.value
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 text-zinc-700",
              ].join(" ")}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <label
        htmlFor="qr-value"
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-700"
      >
        {label}
      </label>
      <input
        id="qr-value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none"
      />

      <div className="mt-6 flex gap-3">
        {["#15161A", "#3F7CF5", "#F76B1C", "#C8FF3D"].map((color) => (
          <button
            key={color}
            type="button"
            aria-label={`Pick ${color} foreground color`}
            onClick={() => setFg(color)}
            className={[
              "h-8 w-8 rounded-full border-2 border-zinc-900",
              fg === color
                ? "ring-2 ring-zinc-900 ring-offset-2 ring-offset-[#F2EFE6]"
                : "",
            ].join(" ")}
            style={{ background: color }}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-700">
            Module shape
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(["square", "dots", "rounded"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setShape(option)}
                className={[
                  "rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em]",
                  shape === option
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-300 text-zinc-700",
                ].join(" ")}
              >
                {option === "square"
                  ? "Square"
                  : option === "dots"
                    ? "Dots"
                    : "Rounded"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-700">
            Error correction
          </div>
          <div className="grid grid-cols-4 gap-2">
            {(["L", "M", "Q", "H"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setEcc(option)}
                className={[
                  "rounded-full border px-2 py-2 font-mono text-[10px] uppercase tracking-[0.12em]",
                  ecc === option
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-300 text-zinc-700",
                ].join(" ")}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center rounded-[16px] border-[2px] border-zinc-900 bg-white p-5">
        <div ref={box} className="aspect-square h-[220px] w-[220px]" />
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
          PNG · PDF
        </button>
      </div>
    </div>
  );
}
