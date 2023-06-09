import { CounterContextProvider } from "./components/contexts/CounterContext";
import Navbar from "./components/sections/Navbar";
import GoogleMapsLoader from "./components/utils/GoogleMapsLoader";
import "./globals.css";

export const metadata = {
  title: "Kalkulačka dojíždění",
  description: "Aplikace složící k výpočtu volného času",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full w-full">
        <Navbar />
        <CounterContextProvider>
          <GoogleMapsLoader>{children}</GoogleMapsLoader>
        </CounterContextProvider>
      </body>
    </html>
  );
}
