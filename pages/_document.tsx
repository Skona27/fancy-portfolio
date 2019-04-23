/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

import Document, { Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Global
          styles={css`
            * {
             @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&subset=latin-ext');
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          `}
        />

        <body css={{
          fontFamily: "Montserrat, sans-serif",
          lineHeight: 1.4,
          color: "#444",
          background: "#fafafa",
          padding: "4rem 2rem",
          maxWidth: "50rem",
          margin: "auto"
        }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;