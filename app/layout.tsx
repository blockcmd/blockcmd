import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BlockCMD - Command your blocks',
  description: 'Explore blockchains with an intuitive product suite',
  metadataBase: new URL('https://www.blockcmd.com'),
  openGraph: {
    title: 'BlockCMD - Command your blocks',
    description: 'Explore blockchains with an intuitive product suite',
    url: 'https://www.blockcmd.com',
    siteName: 'BlockCMD',
    images: [
      {
        url: '/blockcmd-tbn.png',
        width: 1200,
        height: 630,
        alt: 'og-image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlockCMD - Command your blocks',
    description: 'Explore blockchains with an intuitive product suite',
    creator: '@zxstim',
    images: ['/blockcmd-tbn.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer data-domain="blockcmd.com" src="https://analytics.pyhash.com/js/script.js"></Script>
      <body className={inter.className}>
        <main className="flex flex-col p-8 md:p-16 lg:p-24 items-center">
          <div className="max-w-5xl">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
