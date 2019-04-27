import React from "react";
import App, {Container, NextAppContext} from "next/app";
import {Theme} from "../hooks/Theme";
import {Header} from "../components/Header";
import {Layout} from "../components/Layout";
import {headerData} from "../data/header";

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
            <Header {...headerData} />
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </Container>
    );
  }
}

export default MyApp;
