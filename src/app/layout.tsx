import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nafiz M. | Web Dev",
  description: "Portfolio Site For Web Dev Nafiz Mahmud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <div className="res bg-red-500  sm:bg-yellow-500 md:bg-green-500 lg:bg-purple-500 xl:bg-blue-500 2xl:bg-pink-500 h-[.5rem] w-full"></div> */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
