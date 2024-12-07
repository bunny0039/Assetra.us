"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import Store from "@/states/store/store";
import { Toaster } from "@/components/ui/toaster";
import AuthLayouts from "./AuthLayouts";
import Aos from "aos";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#169AC8",
    },
  },
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      // Your AOS options here (optional)
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader zIndex={99999999} color="#169AC8" />
        <Provider store={Store}>
          <AuthLayouts>
            <ThemeProvider theme={theme}>
              {children}
              <Toaster />
            </ThemeProvider>
          </AuthLayouts>
        </Provider>
      </body>
    </html>
  );
}
