import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function CustomApp({ Component, pageProps, }: AppProps) {

    return (

        <>
       
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS="G-HG67SWCXZS"}`} />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
            
            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag("js", new Date());
                    gtag("config", "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS="G-HG67SWCXZS"}", {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
           
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            
            <Component {...pageProps} />
        </>
        
    );
}

export default CustomApp;