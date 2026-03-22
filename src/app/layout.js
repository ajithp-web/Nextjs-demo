import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { Inter, Outfit } from "next/font/google"; // ✅ import font

// ── Load Outfit font ─────────────────────────────
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// ── Metadata ────────────────────────────────────
export const metadata = {
  title: "Evoqins — Software development company",
  description:
    "A software development company delivering enterprise apps, e-commerce solutions, and fintech products.",
  keywords: [
    "digital product development",
    "mobile app development",
    "web app development",
    "UI UX design",
    "fintech development",
    "software development company",
    "Evoqins",
  ],
  authors: [{ name: "Evoqins", url: "https://evoqins.com" }],
  creator: "Evoqins",
  publisher: "Evoqins",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://evoqins.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── Layout ──────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
