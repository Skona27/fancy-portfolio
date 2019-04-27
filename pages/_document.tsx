/** @jsx jsx */
import {Global, css, jsx} from "@emotion/core";
import Document, {Head, Main, NextScript} from "next/document";
import {breakpoints} from "../ui";

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
             @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=latin-ext');
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Montserrat, sans-serif;
              line-height: 1.5;
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
            
            body {overflow-y:scroll;}
            
            h2 {  
             margin-top: 1.5rem;
             margin-bottom: .75rem;
             padding-top: 1.5rem;

            }
            
            h3 {  
             margin-top: 1rem;
             margin-bottom: .5rem;
             padding-top: 1rem;
            }
            
            p {  
             margin-top: .25rem;
             padding-top: .25rem;
            }
            
            code,
            pre {
              font-size: .875rem;
              font-weight: 400;
            }
            
            code {
              padding: 2px 4px;
              vertical-align: text-bottom;
            }
            
            pre {
              padding: 1rem;
              margin: .5rem 0;
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