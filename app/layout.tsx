import type { Metadata } from "next";
import { Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/layout/header";
import { SmoothScroll } from "@/src/components/layout/smooth-scroll";
import { ScrollToTop } from "@/src/components/ui/scroll-to-top";
import { JsonLdOrganization } from "@/src/components/seo/json-ld";
import { Footer } from "@/src/components/layout/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MS Studio — Manicure e Pedicure Domiciliar em São Paulo",
   verification: {
    google: "Ie66Vc37i8lfNb3SgcuXuNcXPwTi8IfPHIqwllz1VaE",
  },
  metadataBase: new URL("https://studiobyms.com.br"),
  description:
    "Manicure e pedicure domiciliar em São Paulo — atendimento na sua casa com qualidade profissional. Agende seu horário.",
  keywords: [ "manicure domiciliar em São Paulo",
  "pedicure domiciliar em São Paulo",
  "manicure em casa São Paulo",
  "pedicure em casa São Paulo",
  "manicure e pedicure SP",
  "serviço de manicure domiciliar",
  "MS Studio",],
  authors: [{ name: "MS Studio" }],
  openGraph: {
    title: "MS Studio — Manicure e Pedicure Domiciliar em São Paulo",
    description:
      "Manicure e pedicure domiciliar em São Paulo — atendimento na sua casa com qualidade profissional. Agende seu horário.",
    siteName: "MS Studio",
    url: "https://studiobyms.com.br",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Studio — Manicure e Pedicure Domiciliar em São Paulo",
    description:
      "Manicure e pedicure domiciliar em São Paulo — atendimento na sua casa com qualidade profissional. Agende seu horário.",
  },
  icons: [
    { rel: "icon", url: "/favicon.svg" },
    { rel: "icon", url: "/images/favicon.png" },
    { rel: "apple-touch-icon", url: "/images/favicon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <GoogleAnalytics gaId="G-JBF1CKK438" />
        <SmoothScroll />
        <JsonLdOrganization />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
