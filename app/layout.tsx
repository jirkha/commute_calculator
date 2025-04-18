import { CounterContextProvider } from "./components/contexts/CounterContext";
import Navbar from "./components/sections/Navbar";
import GoogleMapsLoader from "./components/utils/GoogleMapsLoader";
import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUMA SUMÁRUM | Kalkulačka volného času",
  description: "Aplikace složící k výpočtu volného času po přestěhování",
  icons: { 
    icon: '/favicon.svg',},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cairo.className}>
      <body
        className="min-h-full w-full bg-white"
      >
        <Navbar />
        <CounterContextProvider>
          <GoogleMapsLoader>{children}</GoogleMapsLoader>
        </CounterContextProvider>
      </body>
    </html>
  );
}
