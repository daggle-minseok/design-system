import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/docs/site-header";
import { ThemeProvider } from "@/components/docs/theme-provider";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Daggle UI", template: "%s · Daggle UI" },
  description: "다글 디자인 시스템 컴포넌트 레지스트리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
