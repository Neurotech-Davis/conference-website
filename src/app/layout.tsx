import type { Metadata } from "next";
import { Inter,
          Poppins as Sans, 
          Outfit as Serif} from "next/font/google";
import "./globals.css";
import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";

<link rel="icon" href="/favicon.ico" sizes="any" />

const inter = Inter({ subsets: ["latin"] })
const poppins = Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: '--font-poppins', style: ["normal", "italic"]})
const outfit = Serif({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: '--font-outfit'})

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
      <body className={`${poppins.variable} font-sans bg-gradient-to-br from-blue-200  to-red-300 overscroll-none`}>
          <NavBar/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}
