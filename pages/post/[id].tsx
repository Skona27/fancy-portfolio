import * as React from "react";
import Head from "next/head";
import { IPost } from "../../components/Blog/types";
import Error from "../../pages/_error";
import { Spinner } from "../../components/Spinner";
import { getSinglePost } from "../../api/post";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import dynamic from "next/dynamic";
import { constants } from "../../config/client";

const SinglePost = dynamic<IPost>(() =>
  import("../../components/SinglePost").then((module) => module.SinglePost)
);

interface IResponse {
  postFromServer: IPost | null;
  postIDFromServer: string | undefined;
  error: boolean;
}

const Post: React.FC<WithRouterProps & IResponse> = ({
  router,
  postFromServer,
  postIDFromServer,
  error,
}) => {
  const [postID, setPostID] = React.useState(postIDFromServer);
  const [post, setPost] = React.useState(postFromServer);
  const [isError, setIsError] = React.useState(error);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoaderDelayed, setIsLoaderDelayed] = React.useState(true);

  const delayLoader = React.useCallback(() => {
    setTimeout(() => setIsLoaderDelayed(false), 300);
  }, []);

  React.useEffect(() => {
    if (!router || !router.query || isError) {
      return;
    }

    if (post && postID) {
      setIsLoaderDelayed(false);
      setIsLoading(false);
      return;
    }

    delayLoader();

    const postIDFromRouter = router.query.id as string;
    setPostID(postID);

    const fetch = async () => {
      setIsError(false);
      setIsLoading(true);
      setPost(null);

      try {
        const mappedPost = await getSinglePost(postIDFromRouter);
        setPost(mappedPost);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postID]);

  const isContentReady = !isError && !isLoading && post && !isLoaderDelayed;

  const baseTitle = `${constants.author} - Javascript Developer`;
  const title = post ? `${post.title} | ${baseTitle}` : baseTitle;

  const ogImageUrl = post
    ? `${constants.ogGeneratorUrl}?title=${post.title}&url=/post/${post.slug}`
    : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:type" content="article" />
        <meta name="author" content={constants.author} />
        {post && (
          <meta
            property="og:url"
            content={`${constants.baseUrl}/post/${post.slug}`}
          />
        )}
        {router.locale && <meta property="og:locale" content={router.locale} />}
        {post && <meta property="og:title" content={post.title} />}
        {ogImageUrl && <meta name="og:image" content={ogImageUrl} />}
        {post && <meta name="twitter:title" content={post.title} />}
        {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
      </Head>

      <main>
        {isError && <Error />}
        {isContentReady && post ? <SinglePost {...post} /> : <Spinner />}
      </main>
    </>
  );
};

// @ts-ignore
Post.getInitialProps = async ({ req, query }) => {
  const response: IResponse = {
    postFromServer: null,
    postIDFromServer: undefined,
    error: false,
  };

  if (req) {
    try {
      response.postFromServer = await getSinglePost(query.id);
      response.postIDFromServer = query.id;
    } catch {
      response.error = true;
    }
  }
  return response;
};

Post.displayName = "Post";
export default withRouter(Post);
