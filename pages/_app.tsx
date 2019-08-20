import React from "react";
import App, { Container, AppContext } from "next/app";
import { Theme } from "../hooks/Theme";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { headerData } from "../data/header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  // @TODO - React event
  onTabPress = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      document.body.classList.add("enable-outline");
      window.removeEventListener("keydown", this.onTabPress);
      window.addEventListener("mousemove", this.onMouseMove);
    }
  };

  onMouseMove = () => {
    document.body.classList.remove("enable-outline");
    window.removeEventListener("mousemove", this.onMouseMove);
    window.addEventListener("keydown", this.onTabPress);
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onTabPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onTabPress);
    window.removeEventListener("mousemove", this.onMouseMove);
  }

  render() {
    const { Component, pageProps } = this.props;

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
