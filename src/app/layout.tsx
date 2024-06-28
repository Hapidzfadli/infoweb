import type { Metadata } from "next";
import { Glory, Poppins  } from "next/font/google";
import "./globals.css";
import Head from 'next/head'
const glory = Glory({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Kiosfilm21 - Info",
  description: "Tetap terupdate dengan informasi terbaru tentang website Kiosfilm21.",
  keywords: "Kiosfilm21, Downmovie21, informasi website, Lk21, Pusatfilm21, Indoseries21",
  authors: [{name : "Kiosfilm21"}],
  verification : {
    google : "LsnvO6eolEiAfoWKP1WjT2PrzydGN5bwWnQIjXYMxvI",
  },
  openGraph: {
    title: "Kiosfilm21 - Update Info",
    description: "Stay updated with the latest information about Kiosfilm21 website.",
    url: "http://206.189.86.39",
    type: "website",
    images: [
      {
        url: "http://206.189.86.39/wp-content/uploads/2024/06/1080x360-removebg-preview-1.png",
        width: 800,
        height: 600,
        alt: "Kiosfilm21",
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="LsnvO6eolEiAfoWKP1WjT2PrzydGN5bwWnQIjXYMxvI" />
      </Head>
      <body className= {poppins.className}>{children}</body>
    </html>
  );
}
