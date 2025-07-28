import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import SymposiumBanner from "./SymposiumBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Young Agers",
  description: "A community of early-career researchers working on the Maillard reaction",
  icons: {
    icon: '/logo_2023.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['light', 'dark']}
        >
          {children}
          <SymposiumBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
