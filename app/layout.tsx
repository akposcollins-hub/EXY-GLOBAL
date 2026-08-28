import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "EXY Global | People. Skills. Performance.", template: "%s | EXY Global" },
  description: "EXY Global provides human capacity development, professional training, hiring and consultancy services in Nigeria.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
