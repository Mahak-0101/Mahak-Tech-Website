import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer, Navbar } from "@/components/navigation";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
export const metadata: Metadata = { metadataBase: new URL("https://mahaktech.com"), title: { default: "MahakTech | Premium Technology Company", template: "%s | MahakTech" }, description: "MahakTech builds premium software, AI, cybersecurity, cloud, IoT, automation, ERP, CRM, POS, and digital transformation platforms.", openGraph: { title: "MahakTech", description: "Enterprise-grade technology services and future-ready product marketplace.", type: "website" }, twitter: { card: "summary_large_image" }, alternates: { canonical: "/" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" className="dark"><body className={`${geist.variable} noise min-h-screen font-sans antialiased`}><a href="#main" className="sr-only focus:not-sr-only focus-ring">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /></body></html>; }
