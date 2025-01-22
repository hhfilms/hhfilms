import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import type {Metadata} from "next";
import {Providers} from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const metadata: Metadata = {
  title: "Heart & Hustle Films",
  description: "sports videography | event coverage | business promos | cinematic storytelling",
  openGraph: {
    title: "Heart & Hustle Films",
    description: "sports videography | event coverage | business promos | cinematic storytelling",
    url: "https://hearthustlefilms.com",
    siteName: "Heart & Hustle Films",
    images: [
      {
        url: "https://d3fpz3joletla1.cloudfront.net/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Heart & Hustle Films Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heart & Hustle Films",
    description: "sports videography | event coverage | business promos | cinematic storytelling",
    images: ["https://d3fpz3joletla1.cloudfront.net/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-main-950">
        <Providers>
          <div className="w-100 h-screen flex flex-col">
            <Header />
            <AppRouterCacheProvider>
              <main className="bg-main-950 flex-grow">{children}</main>
              <Footer />
            </AppRouterCacheProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
