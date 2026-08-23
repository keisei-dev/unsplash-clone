import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unsplash — Beautiful Free Images & Pictures",
  description:
    "The internet’s source for visuals. Powered by creators everywhere.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
