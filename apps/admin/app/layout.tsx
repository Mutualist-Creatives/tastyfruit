import type { Metadata } from "next";
import { Nunito, Bricolage_Grotesque } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

// Temporarily disable custom font to fix build issues
// const bricolageGrotesqueCondensed = localFont({
//   variable: "--font-bricolage-grotesque-condensed",
//   src: [
//     {
//       path: "./fonts/webfonts/bricolage-grotesque-condensed/BricolageGrotesque48ptCondensed-ExtraLight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     // ... other font weights
//   ],
// });

export const metadata: Metadata = {
  title: "TastyFruit Admin",
  description: "Administrative dashboard for TastyFruit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${bricolageGrotesque.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
