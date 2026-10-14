import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portive Exports Pvt. Ltd. · Trade Simplified.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  description:
    "A modern Pakistani import/export company offering sourcing, procurement, export and import services, freight forwarding, and end-to-end trade facilitation.",
  keywords: [
    "import export Pakistan",
    "sourcing and procurement Pakistan",
    "freight forwarding",
    "trade facilitation",
    "Canton Fair sourcing",
    "Portive Exports",
  ],
  openGraph: {
    title: "Portive Exports Pvt. Ltd. · Trade Simplified.",
    description:
      "End-to-end trade facilitation: sourcing, documentation, and freight under one roof.",
    url: "https://portiveimpex.com",
    siteName: "Portive Exports",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portive-theme');if(t==='light')document.documentElement.classList.add('light');})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
