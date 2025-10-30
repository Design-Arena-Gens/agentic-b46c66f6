import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoSphere | Premium Car Marketplace",
  description: "Discover, compare, and buy premium vehicles with confidence."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
