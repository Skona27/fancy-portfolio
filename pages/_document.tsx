/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import Document, { Head, Main, Html, NextScript } from "next/document";
import { breakpoints } from "../ui";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <script src="https://www.googletagmanager.com/gtag/js?id=UA-77710570-3" />
          <script src="/static/gtag.js" />
          <script src="/static/prism.js" />

          <meta name="description" content="" />
          <meta name="theme-color" content="#f54e7d"></meta>

          <link rel="manifest" href="/static/manifest.json" />

          <link href="/static/fonts/style.css" rel="stylesheet" />
          <link href="/static/prism.css" rel="stylesheet" />
        </Head>

        <Global
          styles={css`
            * {
              @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=auto&subset=latin-ext");
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Montserrat, sans-serif;
              line-height: 1.6;
              ${breakpoints.fromTablet} {
                line-height: 1.7;
              }
            }

            html {
              font-size: 75%;
              ${breakpoints.fromMobile} {
                font-size: 87.5%;
              }
              ${breakpoints.fromTablet} {
                font-size: 100%;
              }
            }

            body {
              overflow-y: scroll;
              overflow-x: hidden;
            }

            h1 {
              margin-top: 1.5rem;
              margin-bottom: 0.75rem;
              padding-top: 1.5rem;
              font-size: 2.5rem;
              ${breakpoints.fromMobile} {
                font-size: 2.25rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 2rem;
              }
            }

            h2 {
              margin-top: 1.5rem;
              margin-bottom: 0.75rem;
              padding-top: 1.5rem;
              font-size: 2rem;
              ${breakpoints.fromMobile} {
                font-size: 1.75rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 1.5rem;
              }
            }

            h3 {
              margin-top: 1rem;
              padding-top: 1rem;
              margin-bottom: -0.75rem;
              font-size: 1.45rem;
              ${breakpoints.fromMobile} {
                font-size: 1.3rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 1.17rem;
              }
            }

            h4 {
              margin-top: 0.5rem;
              padding-top: 0.5rem;
              margin-bottom: -0.85rem;
              font-size: 1.2rem;
              ${breakpoints.fromMobile} {
                font-size: 1.15rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 1.1rem;
              }
            }

            p {
              margin-top: 1rem;
              margin-bottom: 1.25rem 0;
              padding: 0.25rem 0;
              font-size: 1.3rem;
              ${breakpoints.fromMobile} {
                font-size: 1.2rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 1.1rem;
                letter-spacing: 1px;
              }
            }

            pre {
              border-radius: 0.3em;
              transition: background-color 0.1s ease-in;
              margin-top: 1rem !important;
            }

            ul {
              margin-left: 20px;
            }

            figure {
              margin: 1.5rem 0;
            }
            img {
              width: 100%;
              margin-top: 0.5rem;
            }

            iframe {
              margin-top: 0.5rem;
              width: 100%;
            }

            a {
              text-decoration: none;
              color: inherit;
              font-weight: 500;
              padding: 2px;
              border-bottom: 3px solid transparent;
            }

            strong {
              font-weight: 600;
              font-size: 1.32rem;
              ${breakpoints.fromMobile} {
                font-size: 1.22rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 1.12rem;
              }
            }
            em {
              font-weight: 500;
              font-size: 1.32rem;
              ${breakpoints.fromMobile} {
                font-size: 1.22rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 1.12rem;
              }
            }

            body:not(.enable-outline) button:focus,
            body:not(.enable-outline) a:focus {
              outline: none;
            }
          `}
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
