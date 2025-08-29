import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";
// API örneklerini development ortamında kullanabilmek için import ediyoruz
import "./lib/examples";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PDR Uzmanı - Psikolojik Danışmanlık ve Terapi",
  description:
    "Profesyonel psikolojik destek, bireysel terapi, çift terapisi ve eğitim hizmetleri. Güvenilir ve deneyimli PDR uzmanından randevu alın.",
  keywords:
    "PDR, psikoloji, terapi, danışmanlık, bireysel terapi, çift terapisi, eğitim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloating
          phone="+905074760309"
          message="Merhaba, web sitenizden yazıyorum."
        />
      </body>
    </html>
  );
}
