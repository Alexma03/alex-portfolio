import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Head from "next/head";
import { FloatingNavbar } from "@/components/FloatingNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio AlexMarcos",
  description:
    "Portfolio of Alejandro Marcos Software Engineer. Thanks for watching it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio AlexMarcos.software</title>
        <meta
          name="description"
          content="Portfolio of Alejandro Marcos Software Engineer. Thanks for watching it!"
        />
        <meta
          name="keywords"
          content="Developer, Software, Engineer, Desarrollador, Full Stack, Backend, Frontend, Android, dev"
        />
        <meta name="author" content="Alejandro Marcos García" />
        <meta property="og:title" content="Portfolio AlexMarcos.software" />
        <meta
          property="og:description"
          content="Portfolio of Alejandro Marcos Software Engineer. Thanks for watching it!"
        />
        <meta property="og:image" content="" /> {/* TODO */}
        <meta property="og:url" content="https://alexmarcos.software" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Alexmarcos_03" />
        <meta name="twitter:title" content="Portfolio AlexMarcos.software" />
        <meta
          name="twitter:description"
          content="Portfolio of Alejandro Marcos Software Engineer. Thanks for watching it!"
        />
        <meta name="twitter:image" content="/ruta/a/tu/imagen-twitter.jpg" />{" "}
        {/* TODO */}
        <link rel="canonical" href="https://alexmarcos.software" />
      </Head>
      <body className={`${inter.className} mx-12 mt-8`}>
        <FloatingNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
