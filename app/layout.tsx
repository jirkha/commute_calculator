import { CounterContextProvider } from "./components/contexts/CounterContext";
import Navbar from "./components/sections/Navbar";
import GoogleMapsLoader from "./components/utils/GoogleMapsLoader";
import type { Metadata } from "next";
import "./globals.css";
import {Cairo} from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kalkulačka volného času",
    default: "SUMA SUMÁRUM",
  },
  description: "Aplikace složící k výpočtu volného času po přestěhování",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cairo.className}>
      <head>
        <link rel="shortcut icon" href="/logo_transp.ico" type="image/x-icon" />
        <title>SUMA SUMÁRUM</title>
      </head>
      <body
        className="min-h-full w-full bg-black"
      >
        <Navbar />
        <CounterContextProvider>
          <GoogleMapsLoader>{children}</GoogleMapsLoader>
        </CounterContextProvider>
      </body>
    </html>
  );
}

// export { metadata };
