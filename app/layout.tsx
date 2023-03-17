import "./globals.css";

export const metadata = {
  title: "Rounder",
  description:
    "Rounder is a simple app that allows you to vote on which Pokémon is more round.",
  icons: "/pokeball.svg",
};

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
