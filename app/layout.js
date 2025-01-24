import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PDM Tutor",
  description: "We Bring Education in it's simpliest form",
};

export default function RootLayout({ children, title }) {
  const pageTitle = title || metadata.title;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Header /> */}
          {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
