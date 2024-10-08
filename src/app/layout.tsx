import "./globals.css";

import { Inter } from "next/font/google";

import Providers from "@/app/providers";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
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
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container flex-1 pb-20">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
