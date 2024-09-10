import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Error from "./error";

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
  title: "Duc Le' Portfolio",
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
        className={`container m-0 p-0 w-screen max-w-full
                  ${geistSans.variable} ${geistMono.variable} antialiased
                  bg-white dark:bg-black`}
      >
        <main>
          {children}
        </main>
          
      </body>
    </html>
  );
}
