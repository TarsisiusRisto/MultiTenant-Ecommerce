import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const dmsans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multitenant E-commerce",
  description: "Created by @tarsisiusristo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.className}  antialiased`}>
        <NuqsAdapter>
          <TRPCReactProvider>
            {children}
            <Toaster />
          </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
