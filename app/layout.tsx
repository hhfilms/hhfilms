import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import type {Metadata} from "next";
import {Providers} from "./providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

import "./globals.scss";

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
      <body>
        <Providers>
          <div className="w-100 h-screen">
            <Header />
            <AppRouterCacheProvider>
              <main className="flex-grow overflow-y-auto bg-midnight">{children}</main>
            </AppRouterCacheProvider>
            <Socials />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
