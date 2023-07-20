import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paweł Kowaluk",
  description: "The portfolio site of Paweł Kowaluk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-2 p-12">
          <div
            className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex"
            id="page-header"
          >
            <a href="/" className="hover:scale-110 active:scale-125">
              <Image
                src="/k-logo-black.png"
                alt="Kowaluk Logo"
                className="dark:invert"
                width={24}
                height={24}
                priority
              />
            </a>
          </div>
          <div className="flex flex-col gap-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
