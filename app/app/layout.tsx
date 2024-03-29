import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

const din = localFont({
  src: "../fonts/Dinrundschriftmittel.otf",
  display: "swap",
  variable: "--din",
});

const windsor = localFont({
  src: "../fonts/Windsor.ttf",
  display: "swap",
  variable: "--windsor",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${din.variable} ${windsor.variable} flex flex-col relative max-w-[1052px] py-8 min-h-screen mx-auto`}
      >
        <Navbar />
        <section className="flex-1 relative">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
