import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export const metadata: Metadata = {
  // metadataBase: new URL("/"),

  title: {
    default: "Prince Raj Singh | Frontend Developer ",
    template: "%s | Prince Raj Singh",
  },

  description:
    "Prince Raj Singh is a BCA student and frontend developer interested in web development, Next.js.",

  keywords: [
    "Prince Raj Singh",
    "Frontend Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "BCA Student",
    "Portfolio",
  ],

  authors: [
    {
      name: "Prince Raj Singh",
    },
  ],

  creator: "Prince Raj Singh",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/images/og-image.jpg",
    title: "Prince Raj Singh | Frontend Developer",
    description:
      "Portfolio of Prince Raj Singh — frontend developer.",
    siteName: "Prince Raj Singh Portfolio",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "Prince Raj Singh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prince Raj Singh | Frontend Developer",
    description:
      "Portfolio of Prince Raj Singh — frontend developer.",
    images: ["/about.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}