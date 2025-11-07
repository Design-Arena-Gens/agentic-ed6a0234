import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Classic Game Boy SVG",
  description: "A meticulously crafted SVG illustration of the classic Nintendo Game Boy."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
