import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jenish Patel's Portoflio",
  description: "Jenish's coding portolio and contact information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-void">
      <head>
        <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated"
        />
      </head>
      <body className={inter.className}>
        <header>
          <Navigation></Navigation>  
        </header>
        {children}
      </body>
    </html>
  );
}
