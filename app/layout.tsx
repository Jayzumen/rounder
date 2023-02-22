import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-gradient-to-b from-sky-800 to-black text-white">
        {children}
      </body>
    </html>
  );
}
