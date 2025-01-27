import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artea Wright",
  description: "Filling gaps in tech to catalyze people centered solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-flow-col grid-rows-3 gap-4">
        <nav className="row-span-3" >This is the nav</nav>
          <main className="col-span-2">{children}</main>
          <footer className="col-span-2 row-span-2">This is the footer</footer>
      </body>
    </html>
  );
}
