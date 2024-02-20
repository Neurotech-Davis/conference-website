import type { Metadata } from "next";
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";

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
          <NavBar/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}
