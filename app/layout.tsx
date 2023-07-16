import { CounterContextProvider } from "./components/contexts/CounterContext";
import Navbar from "./components/sections/Navbar";
import GoogleMapsLoader from "./components/utils/GoogleMapsLoader";
import "./globals.css";

// type Metadata = {
//   title: string;
//   description: string;
// };

//  const metadata: Metadata = {
//    title: "Kalkulačka dojíždění",
//    description: "Aplikace složící k výpočtu volného času",
//  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SUMA SUMÁRUM</title>
      </head>
      <body className="min-h-full w-full relative">
        <Navbar />
        <CounterContextProvider>
          <GoogleMapsLoader>{children}</GoogleMapsLoader>
        </CounterContextProvider>
      </body>
    </html>
  );
}

// export { metadata };
