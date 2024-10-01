import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./ui/Footer";
import { cn } from "@/lib/utils";
import { SiteConfig } from "../config/site";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
// import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAdsense from "@/components/Adsense";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  verification: {
    google: "iZXjm9uFzwoY7JQPI36eyGRRv1RZM-iOHQK_nKkwJI8",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <meta
        name="google-adsense-account"
        content="ca-pub-4302683929131089"
      ></meta>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID ?? ""} />
      <GoogleAdsense pId={process.env.NEXT_PUBLIC_ADDSENSE_ID ?? ""} />
      <Analytics />
      <SpeedInsights />

      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} min-h-screen bg-background antialiased`
        )}
      >
        <section className="md:mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </section>
      </body>
    </html>
  );
}
