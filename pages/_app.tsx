import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../public/asset/css/global.css";
import "../pages/blog/blog-detail.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
