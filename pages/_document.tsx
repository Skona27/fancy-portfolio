/** @jsx jsx */
import {Global, css, jsx} from "@emotion/core";
import Document, {Main, NextScript} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
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
      <body>
        <Main/>
        <NextScript/>

        <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
                integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
                crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

export default MyDocument;