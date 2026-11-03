export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  lastModified: string;
};

export const pages: PageMeta[] = [
  {
    path: "/",
    title: "Free QR Code Generator & Barcode Scanner | Scannow",
    description:
      "Create custom QR codes and scan QR or barcodes online. Free, no sign-up, works offline. Reads Code 128, EAN-13 and more.",
    h1: "Free QR Code Generator & Barcode Scanner",
    lastModified: "2026-11-03",
  },
  {
    path: "/qr-code-generator",
    title: "Free QR Code Generator – Custom, No Sign-up | Scannow",
    description:
      "Make a free QR code for a link, text or contact. Change colours and shape, then download SVG, PNG or PDF. No expiry, no limits.",
    h1: "Free QR Code Generator",
    lastModified: "2026-11-03",
  },
  {
    path: "/wifi-qr-code-generator",
    title: "Wi-Fi QR Code Generator – Share Wi-Fi Easily | Scannow",
    description:
      "Create a Wi-Fi QR code so guests join your network without typing the password. Free, private, printable.",
    h1: "Wi-Fi QR Code Generator",
    lastModified: "2026-11-03",
  },
  {
    path: "/upi-qr-code-generator",
    title: "Free UPI QR Code Generator for Payments | Scannow",
    description:
      "Generate a UPI QR code with your UPI ID and amount. Free, no sign-up, print-ready for shops and invoices.",
    h1: "UPI QR Code Generator",
    lastModified: "2026-11-03",
  },
  {
    path: "/vcard-qr-code-generator",
    title: "vCard QR Code Generator – Digital Business Card | Scannow",
    description:
      "Turn your contact details into a vCard QR code. Scan to save name, phone, email and website. Free and private.",
    h1: "vCard QR Code Generator",
    lastModified: "2026-11-03",
  },
  {
    path: "/barcode-generator",
    title: "Free Barcode Generator – Code 128, EAN-13, UPC | Scannow",
    description:
      "Create barcodes online: Code 128, Code 39, EAN-13, UPC-A and ITF. Automatic check digits. Download PNG or SVG.",
    h1: "Free Barcode Generator",
    lastModified: "2026-11-03",
  },
  {
    path: "/qr-code-scanner",
    title: "Online QR Code Scanner – Scan with Camera or Image | Scannow",
    description:
      "Scan QR codes online with your camera or an uploaded image. Nothing is uploaded; decoding happens on your device.",
    h1: "Online QR Code Scanner",
    lastModified: "2026-11-03",
  },
  {
    path: "/barcode-scanner-online",
    title: "Online Barcode Scanner – Reads Code 128, EAN, UPC | Scannow",
    description:
      "Scan 1D barcodes your phone camera can’t read: Code 128, Code 39, EAN-13, UPC-A, ITF. Free, private and instant.",
    h1: "Online Barcode Scanner",
    lastModified: "2026-11-03",
  },
];

export const pageLookup = Object.fromEntries(
  pages.map((page) => [page.path, page]),
) as Record<string, PageMeta>;
