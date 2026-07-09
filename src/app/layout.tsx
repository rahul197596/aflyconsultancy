import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { MobileNavProvider } from "@/components/MobileNavContext";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteName = "Afly Consultancy Services";
const siteDescription =
  "Afly Consultancy Services helps students study abroad with expert guidance on university selection, visa applications, test preparation, and scholarships across the UK, USA, Canada, Australia, Ireland, and Germany.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aflyconsultancy.com"),
  title: {
    default: `${siteName} | Overseas Education Consultants`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | Overseas Education Consultants`,
    description: siteDescription,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Overseas Education Consultants`,
    description: siteDescription,
    images: ["/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteName,
  alternateName: "Afly Consultancy",
  url: "https://aflyconsultancy.com",
  logo: "https://aflyconsultancy.com/logo.png",
  description: siteDescription,
  slogan: "Aim High Fly High",
  areaServed: ["United Kingdom", "United States", "Canada", "Australia", "Ireland", "Germany"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8125144079",
    email: "info@aflyconsultancy.com",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MobileNavProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </MobileNavProvider>
      </body>
    </html>
  );
}
