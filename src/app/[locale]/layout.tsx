import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import "@/src/style/globals.css";
import AuthContextProvider from "@/src/context/AuthContext";
import Navbar from "@/src/components/Navbar";
import FooterSec from "@/src/components/FooterSec";
import ChangeTheme from "@/src/ui/ChangeTheme";
import LocaleSwitcher from "@/src/components/LocaleSwitcher";

type Props = {
  children: ReactNode;
  params: { locale: string };
};
export const metadata: Metadata = {
  title: "Amil's portfolio",
  description: "This website generated by create next app",
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/favicon.ico" },
  ],
};

export default async function RootLayout({
  params: { locale },
  children,
}: Props) {


  const messages = await getMessages();

  return (
    <html lang={`${locale}`} suppressHydrationWarning>
      <body>
        <AuthContextProvider>
          <ThemeProvider attribute="class">
            <NextIntlClientProvider locale={locale} messages={messages}>
              <header>
                <div className=" w-full  text-black dark:bg-black px-10 dark:text-white ">
                  <ChangeTheme /> <LocaleSwitcher locale={locale} />
                  <Navbar />
                </div>
              </header>
              {children}
              <footer className=" flex  flex-wrap text-black dark:bg-black dark:text-white items-center justify-center">
                <FooterSec />
              </footer>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
