import * as React from "react";
import { IPost } from "../components/Blog/types";
import Error from "../pages/_error";
import { Spinner } from "../components/Spinner";
import { getSinglePost } from "../api/post";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import dynamic from "next/dynamic";

const SinglePost = dynamic<IPost>(() =>
  import("../components/SinglePost").then(module => module.SinglePost)
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
  error
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
  }, [postID]);

  const isContentReady = !isError && !isLoading && post && !isLoaderDelayed;

  return (
    <main>
      {isError && <Error />}
      {isContentReady && post ? <SinglePost {...post} /> : <Spinner />}
    </main>
  );
};

// @ts-ignore
Post.getInitialProps = async ({ req, query }) => {
  const response: IResponse = {
    postFromServer: null,
    postIDFromServer: undefined,
    error: false
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
