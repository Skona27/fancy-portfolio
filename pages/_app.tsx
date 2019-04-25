import React from "react";
import App, {Container, NextAppContext} from "next/app";
import {Theme} from "../hooks/Theme";
import {Navigation} from "../components/Navigation";
import {Layout} from "../components/Layout";

class MyApp extends App {
  static async getInitialProps({Component, ctx}: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <Theme>
          <Layout>
            <Navigation/>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </Container>
    );
  }
}

export default MyApp;
