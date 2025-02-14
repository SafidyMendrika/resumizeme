import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const gilroy = localFont({
  src: '../../public/fonts/Gilroy-Light.otf',  
  variable: '--font-gilroy',
});

const gilroyBold = localFont({
  src: '../../public/fonts/Gilroy-Bold.otf',  
  variable: '--font-gilroy-bold',
});

export const metadata: Metadata = {
  title: "Resumizeme",
  description: "Resumizeme project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
    <head>
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
    </head>

      <body className={`${gilroy.variable} ${gilroyBold.variable}`}>
        {children}
      </body>
    </html>
  );
}