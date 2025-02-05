import type { Metadata } from "next";
import { Encode_Sans_Condensed } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artea Wright",
  description: "Filling gaps in tech to catalyze people centered solutions",
};

const encodeSansCondensed = Encode_Sans_Condensed({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Choose available font weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid">
        <main
          className={`${encodeSansCondensed.variable} antialiased grid grid-flow-row-dense grid-cols-4 grid-rows-5 gap-4`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
