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
      <body className="min-h-screen overflow-hidden">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <div className="hidden md:block absolute bottom-3 left-5 ">
            <Reference />
          </div>
        </Providers>
      </body>
    </html>
  );
}
