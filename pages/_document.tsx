/** @jsx jsx */
import { jsx } from "@emotion/core";

import Document, { Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
        <html>
        <body css={{
          fontFamily: "Helvetica, sans-serif",
          lineHeight: 1.6,
          color: "#222",
          maxWidth: "40rem",
          padding: "2rem",
          margin: "auto",
          background: "#fafafa"
        }}>
        <Main />
        <NextScript />
        </body>
        </html>
    );
  }
}

export default MyDocument;