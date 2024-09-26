import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import ReduxProvider from "@/redux/ReduxProvider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
