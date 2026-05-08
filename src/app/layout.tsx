import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaeem Khan | Flutter Developer & UI/UX Designer",
  description:
    "I’m Zaeem Khan, a Flutter Developer and UI/UX Designer. I design and build sleek, high-performance mobile apps with intuitive user experiences.",
  keywords: [
    "Zaeem Khan",
    "Flutter Developer",
    "UI/UX Designer",
    "Mobile App Developer",
    "Cross-Platform Developer",
    "App Design",
    "Dart Developer",
    "Mobile UI Designer",
    "Figma Designer",
    "Remote Flutter Developer"
  ],
  metadataBase: new URL("https://iqraiqbalportfolio.vercel.app"), // Change if deploying to a different domain
  alternates: {
    canonical: "https://iqraiqbalportfolio.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  themeColor: "#2563eb",
  openGraph: {
    title: "Zaeem Khan | Flutter Developer & UI/UX Designer",
    description:
      "Discover mobile apps crafted with Flutter and elegant UI/UX designs. Zaeem Khan is available for remote freelance and full-time opportunities.",
    url: "https://iqraiqbalportfolio.vercel.app",
    siteName: "Zaeem Khan Portfolio",
    images: [
      {
        url: "https://iqraiqbalportfolio.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zaeem Khan Portfolio Preview",
      },
    ],
    locale: "en",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
