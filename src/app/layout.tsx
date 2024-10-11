import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Navbar from "@/Components/Root/Nav";

export const metadata: Metadata = {
  title: "Clicksy Me",
  description: "A fun thing to do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
        {/* must come before the <main> element */}
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true} />
            <Navbar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
