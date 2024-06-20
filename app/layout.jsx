import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const RobotoMono = Roboto_Mono({ subsets: ["latin"], weight: [ "400", "500",  "700"], variable : '--font-jetbrainsMone' });

export const metadata = {
  title: "Anas Portfolio",
  description: "Anas Ahammad Sarker a Webdeveloper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RobotoMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>

        {children}
        </PageTransition>
        </body>
    </html>
  );
}
