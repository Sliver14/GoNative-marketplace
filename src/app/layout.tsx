import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { AuthProvider } from "@/context/auth-context";
import { SearchProvider } from "@/context/search-context";
import { MessagesModal } from "@/components/messages-modal";
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
  title: "Seafood Marketplace Backend",
  description: "Next.js backend and web surface for Seafood Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fdfdfd] text-zinc-950">
        <AuthProvider>
          <SearchProvider>
            <SiteHeader />
            {children}
            <MessagesModal />
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
