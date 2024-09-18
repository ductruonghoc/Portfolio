import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

const StoreProvider = dynamic(() => import("./store_provider"), {
  ssr: false,
}); //CLient side render for each client

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
                  bg-white text-slate-700`}
        >
          <StoreProvider> {/*Store providing for all childs */}
            {children}
          </StoreProvider>
        </body>
      
    </html>
  );
}
