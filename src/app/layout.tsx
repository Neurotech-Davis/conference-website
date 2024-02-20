
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Navbar from "../../components/NavBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neurotech Conference Website",
  description: "Made with <3 by Neurotech@Davis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
