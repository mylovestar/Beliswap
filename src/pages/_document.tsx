/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Div from 'components/Div'
// import * as React from 'react'

// declare module 'react' {
//   interface divProps extends HTMLAttributes<HTMLDivElement> {
//     id?:string;
//     coins?:string;
//     currency?:string;
//     theme?:string;
//     transparent?:string;
//     showsymbollogo?:string;
//   }
// }

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html translate="no">
        <Head>
          {process.env.NEXT_PUBLIC_NODE_PRODUCTION && (
            <link rel="preconnect" href={process.env.NEXT_PUBLIC_NODE_PRODUCTION} />
          )}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&amp;display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="twitter:image" content="/images/image.png" />
          <script type="text/javascript" src="/coinMarquee.js" />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          
          <div id="coinmarketcap-widget-marquee" coins="1,1027,825,4687,23583,74,2306,4116,19792,22234,1839,5805,3890,52,3513,1975,3635" currency="USD" transparent="false" showsymbollogo="true" style={{ marginTop: '56px', position: 'static', width: '100%' }} />
          <Main />
          <NextScript />
          <div id="portal-root" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
