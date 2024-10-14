import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ESRIC",
  description: "Ensuring Your Tomorrow, Today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          >
            <main className="relative overflow-hidden">
              {children}
            </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
