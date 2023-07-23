import { CounterContextProvider } from "./components/contexts/CounterContext";
import Navbar from "./components/sections/Navbar";
import GoogleMapsLoader from "./components/utils/GoogleMapsLoader";
import "./globals.css";
import {Cairo} from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap"
});

// type Metadata = {
//   title: string;
//   description: string;
// };

//  export const metadata: Metadata = {
//    title: "Kalkulačka dojíždění",
//    description: "Aplikace složící k výpočtu volného času",
//  };

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
        //style={cairo.style}
        className="min-h-full w-full relative bg-black"
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
