import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toumeipro.com"),
  title: { default: "Toumei | DLP Projector Manufacturer & OEM/ODM Factory", template: "%s | Toumei" },
  description: "Shenzhen projector manufacturer specializing in DLP smart projectors, triple-laser UST, portable outdoor projectors and complete OEM/ODM solutions since 2013.",
  keywords: ["DLP projector manufacturer", "projector OEM", "projector ODM", "portable projector factory", "triple laser UST projector", "Shenzhen projector supplier"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "Toumei Technology", title: "Toumei Projector OEM/ODM Manufacturer", description: "Complete smart projector solutions—from optical design to mass production.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Toumei - Projection engineered for your market" }] },
  twitter: { card: "summary_large_image", title: "Toumei Projector OEM/ODM Manufacturer", description: "Complete smart projector solutions—from optical design to mass production.", images: ["/og.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Shenzhen Toumei Technology Co., Ltd.", url: "https://www.toumeipro.com", foundingDate: "2013", telephone: "+86-755-29305877", address: { "@type": "PostalAddress", streetAddress: "5/F, Block A (East Building), Jinke Industrial Park, 310 Wuhe Avenue, Guanhu Street", addressLocality: "Shenzhen", addressRegion: "Guangdong", addressCountry: "CN" } };
  return <html lang="en"><body className={`${geist.variable} antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />{children}</body></html>;
}
