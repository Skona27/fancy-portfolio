import * as React from 'react';
import {api} from "../api";
import {Blog as BlogComponent} from "../components/Blog";
import {IPost} from "../components/Blog/types";
import Error from "./_error";

const Blog = React.memo(() => {
  const [posts, setPosts] = React.useState<IPost[] | null>(null);
  const [isError, setIsError] = React.useState(false);

  // Dane z Firebase przychodzą w dziwnym JSON-nie
  // Próbujemy przemapować na YOLO, jak będzie źle to rzucamy błąd!
  React.useEffect(() => {
    const fetch = async () => {
      try {
        setIsError(false);
        const result = await api.get("/posts");
        const mappedPosts = result.data.documents.map((el: any) => {
          return {
            id: el.name.split("/posts/")[1],
            title: el.fields.title.stringValue,
            date: el.fields.date.timestampValue,
            content: el.fields.content.stringValue
          }
        });

        setPosts(mappedPosts);
      } catch (err) {
        setIsError(true);
      }
    };

    fetch();
  }, []);

  return (
    <main>
      {isError ? <Error/> : <BlogComponent elements={posts}/>}
    </main>
  )
});

Blog.displayName = "Blog";
export default Blog;
