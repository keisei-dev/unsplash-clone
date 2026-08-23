import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unsplash — Beautiful Free Images & Pictures",
  description:
    "The internet’s source for visuals. Powered by creators everywhere.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-white text-[#111] antialiased">
        {children}
      </body>
    </html>
  );
}
