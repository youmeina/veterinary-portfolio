
// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/theme.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main className="container" style={{ paddingTop: 20 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
