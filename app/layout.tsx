import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import type {Metadata} from "next";
import {Geist, Geist_Mono, Assistant, Work_Sans} from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const assistant = Assistant({
  variable: "--assistant",
  subsets: ["latin"],
});

const work = Work_Sans({
  variable: "--work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "heart & hustle films",
  description: "sports videography | event coverage | cinematic storytelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${assistant.variable}  ${work.variable}  antialiased`}>
        <div className="flex flex-col w-full h-screen prose-headings:font-assistant">
          <Header />
          <AppRouterCacheProvider>
            <main className="flex-grow overflow-y-auto pt-36">{children}</main>
          </AppRouterCacheProvider>
          <Footer />
          {/* Socials */}
          <Socials />
        </div>
      </body>
    </html>
  );
}
