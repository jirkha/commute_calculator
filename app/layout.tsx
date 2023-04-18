import './globals.css'

export const metadata = {
  title: 'Kalkulačka dojíždění',
  description: 'Aplikace složící k výpočtu volného času',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-full w-full bg-slate-400">{children}</body>
    </html>
  );
}
