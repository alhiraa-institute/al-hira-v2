import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GlowCards from "../components/ui/GlowCards";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Al Hiraa Islamic Coaching Centre — AHIC",
  description:
    "Igniting Hearts with Faith, Minds with Knowledge, and Lives with Purpose. Structured Islamic education for learners aged 4–25.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${montserrat.variable} antialiased grain`}>
        {/* Asset_7 full-screen tiled background */}
        <div className="asset7-bg" aria-hidden="true" />
        <GlowCards />
        <Nav />
        <main style={{ minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}



