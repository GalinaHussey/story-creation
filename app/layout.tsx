import "@/app/_styles/globals.css";
// import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

import { ReactNode } from "react";
import Header from "./_components/Header";
import { TemplateProvider } from "./_context/TemplateContext";

// const poppins = Poppins({
//   weight: ["400", "700", "900"],
//   display: "swap",
//   style: "normal",
//   subsets: ["latin"],
// });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: " %s / The Magic Tales",
    default: "Welcome / The Magic Tales",
  },
  description:
    "Create a personalized story with different characters voices in a few clicks. Choose one of templates",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <TemplateProvider>{children}</TemplateProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
