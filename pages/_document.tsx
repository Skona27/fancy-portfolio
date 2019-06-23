/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import Document, { Head, Main, NextScript } from "next/document";
import { breakpoints } from "../ui";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="pl">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Jakub Skoneczny</title>
          <meta name="description" content="yoyo" />
        </Head>
        <Global
          styles={css`
            * {
              @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&subset=latin-ext");
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

            code,
            pre {
              font-weight: 400;
              font-size: 1.15rem;
              ${breakpoints.fromMobile} {
                font-size: 1rem;
              }
              ${breakpoints.fromTablet} {
                font-size: 0.875rem;
              }
            }

            code {
              padding: 2px 4px;
              vertical-align: text-bottom;
            }

            pre {
              padding: 1rem;
              margin: 1rem 0;
              font-size: 1.1rem;
            }

            ul {
              margin-left: 20px;
            }

            figure {
              margin: 1.5rem 0;
            }
            img {
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
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
            integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

export default MyDocument;
