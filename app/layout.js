import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Stackkaroo",
  description: "Diversifying the Designs of Digital World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />

        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
