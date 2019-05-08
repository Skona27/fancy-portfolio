import * as React from "react";
import { api } from "../api";
import { IPost } from "../components/Blog/types";
import { withRouter, WithRouterProps } from "next/router";
import Error from "../pages/_error";
import { SinglePost } from "../components/SinglePost";
import { Spinner } from "../components/Spinner";

const Post: React.FC<WithRouterProps> = React.memo(({ router }) => {
  const [postID, setPostID] = React.useState<string | undefined>(undefined);
  const [post, setPost] = React.useState<IPost | null>(null);
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoaderDelayed, setIsLoaderDelayed] = React.useState(true);

  const delayLoader = React.useCallback(() => {
    setTimeout(() => setIsLoaderDelayed(false), 500);
  }, []);

  React.useEffect(() => {
    if (!router || !router.query) {
      return;
    }
    delayLoader();

    // Shut up Typescript... I know what I'm doing!
    const postID = router.query.id as string | undefined;
    setPostID(postID);

    const fetch = async () => {
      setIsError(false);
      setIsLoading(true);
      setPost(null);

      try {
        const result = await api.get(`/posts/${postID}`);
        const mappedPost = {
          id: result.data.name.split("/posts/")[1],
          title: result.data.fields.title.stringValue,
          date: result.data.fields.date.timestampValue,
          content: result.data.fields.content.stringValue
        };

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
});

Post.displayName = "Post";
export default withRouter(Post);
