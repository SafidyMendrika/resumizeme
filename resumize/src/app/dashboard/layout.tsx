import { AsideBar } from "@/ui/components/aside-bar/aside-bar";
import type { Metadata } from "next";
import localFont from 'next/font/local'

const gilroy = localFont({
  src: '../../../public/fonts/Gilroy-Light.otf',  
  variable: '--font-gilroy',
});

const gilroyBold = localFont({
  src: '../../../public/fonts/Gilroy-Bold.otf',  
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
      <body className={`${gilroy.variable} ${gilroyBold.variable}`}>
        <AsideBar />
        {children}
      </body>
    </html>
  );
}