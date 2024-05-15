import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Providers from "./GlobalRedux/Provider";
import "./globals.css";
import Reference from "./components/Reference";

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
      <body className="min-h-screen">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Reference />
        </Providers>
      </body>
    </html>
  );
}
