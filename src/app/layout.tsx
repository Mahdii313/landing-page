import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Providers from "./GlobalRedux/Provider";
import "./globals.css";
import Reference from "./components/Reference";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "صفحه فرود",
  description: "Created by Mahdi Rostami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="min-h-screen relative">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
