import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css'

export const metaData = {
  title: "Treads clone",
  description: "A Next.js 13 work around of Meta Treads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
