import React from 'react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from "next/script";

// avoid CSS animation transition flashing
export const DISABLE_SSR_TRANSITION = 'disable-SSR-transition';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fa" className="no-js">
        <Head>
          {/*<meta name="referrer" content="no-referrer" />*/}
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          {/*<link rel="manifest" href="/manifest.json" />*/}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-Y3JRHEJXLT`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
             window.dataLayer = window.dataLayer || [];
            function gtag() {
            dataLayer.push(arguments);
          }
            gtag('js', new Date());

            gtag('config', 'G-Y3JRHEJXLT');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
