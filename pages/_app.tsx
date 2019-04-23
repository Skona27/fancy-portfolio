import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { Navigation } from "../components/Navigation";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Navigation />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
