import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PageTransition from "../Components/PageTransition";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          <Navbar />
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}