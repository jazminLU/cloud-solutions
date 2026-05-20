import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infra Moon | Cloud Engineering & DevOps",
  description:
    "Infra Moon — Ingeniería de software escalable, automatización cloud, CI/CD y QA automation para empresas que construyen el futuro.",
  keywords: [
    "cloud engineering",
    "devops",
    "infrastructure as code",
    "CI/CD",
    "QA automation",
    "frontend",
    "backend",
    "kubernetes",
    "terraform",
    "AWS",
  ],
  openGraph: {
    title: "Infra Moon | Cloud Engineering & DevOps",
    description:
      "Sistemas escalables, automatización cloud y calidad de software de próxima generación.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
