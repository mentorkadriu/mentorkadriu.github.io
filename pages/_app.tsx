import { AppProps } from "next/app";
import "../styles/main.css";
import MainLayout from "../components/layouts/MainLayout";
import Script from "next/script";

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Script strategy="lazyOnload" async src={"https://www.googletagmanager.com/gtag/js?id=UA-40491475-3"} />
      <Script strategy="lazyOnload" id={"google"}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-40491475-3', {
            page_path: window.location.pathname,
          } );
          `}
      </Script>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App;
