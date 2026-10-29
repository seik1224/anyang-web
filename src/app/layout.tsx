import type { Metadata } from "next";
import { Fraunces, Noto_Serif_KR, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anyang Eye Clinic — A Warm Vision for a Brighter World",
  description:
    "안양안과. 세상을 밝히는 따뜻한 시선. 사랑으로 진료하고, 섬김으로 동행합니다. Vision Care · 2002—.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${fraunces.variable} ${notoSerifKR.variable} ${workSans.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
