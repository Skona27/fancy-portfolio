/** @jsx jsx */
import {Global, css, jsx} from "@emotion/core";
import Document, {Head, Main, NextScript} from "next/document";
import {breakpoints} from "../hooks/Theme";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <html lang="pl">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <title>Jakub Skoneczny</title>
        <meta name="description" content="yoyo"/>
      </Head>
      <Global
        styles={css`
            * {
             @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&subset=latin-ext');
              margin: 0;
              padding: 0;
              box-sizing: border-box;
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