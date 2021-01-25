import * as React from "react";
import Head from "next/head";

import Error from "./_error";
import { getAllPosts } from "../api/blog";
import { IPost } from "../components/Blog/types";
import { Spinner } from "../components/Spinner";
import dynamic from "next/dynamic";
import { useLang } from "../hooks/useLang";
import { blog } from "../data/blog";

const BlogComponent = dynamic<{ elements: IPost[] | null; heading: string }>(
  () => import("../components/Blog").then((module) => module.Blog)
);

interface IResponse {
  postsFromServer: IPost[] | null;
  error: boolean;
}

const Blog: React.FC<IResponse> = ({ postsFromServer, error }) => {
  const [posts, setPosts] = React.useState(postsFromServer);
  const [isError, setIsError] = React.useState(error);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoaderDelayed, setIsLoaderDelayed] = React.useState(true);

  const delayLoader = React.useCallback(() => {
    setTimeout(() => setIsLoaderDelayed(false), 300);
  }, []);

  const lang = useLang();
  const data = blog[lang];

  React.useEffect(() => {
    if (isError) {
      return;
    }

    if (posts) {
      setPosts(posts);
      sessionStorage.setItem("posts", JSON.stringify(posts));
      setIsLoaderDelayed(false);
      setIsLoading(false);
      return;
    }
    delayLoader();

    const postsFromStorage = sessionStorage.getItem("posts");

    if (postsFromStorage) {
      setPosts(JSON.parse(postsFromStorage));
      setIsLoading(false);
      return;
    }

    const fetch = async () => {
      setIsLoading(true);

      try {
        setIsError(false);
        const mappedPosts = await getAllPosts();

        setPosts(mappedPosts);
        sessionStorage.setItem("posts", JSON.stringify(mappedPosts));
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isContentReady = !isError && !isLoading && posts && !isLoaderDelayed;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="og:image" content="/static/og/blog.png" />

        {data.title && <meta property="og:title" content={data.title} />}
        {lang && <meta property="og:locale" content={lang} />}
      </Head>

      <main>
        {isError && <Error />}
        {isContentReady ? (
          <BlogComponent elements={posts} heading={data.heading} />
        ) : (
          <Spinner />
        )}
      </main>
    </>
  );
};

// @ts-ignore
Blog.getInitialProps = async ({ req }) => {
  const response: IResponse = { postsFromServer: null, error: false };

  if (req) {
    try {
      const posts = await getAllPosts();
      response.postsFromServer = [...posts];
    } catch {
      response.error = true;
    }
  }
  return response;
};

Blog.displayName = "Blog";
export default Blog;
