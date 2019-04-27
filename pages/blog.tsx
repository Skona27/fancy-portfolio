import * as React from 'react';
import {api} from "../api";
import {Blog as BlogComponent} from "../components/Blog";
import {IPost} from "../components/Blog/types";

const Blog = React.memo(() => {
  const [posts, setPosts] = React.useState<IPost[] | null>(null);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        // Dane z Firebase przychodzą w dziwnym JSON-nie
        // Próbujemy przemapować na YOLO, jak będzie źle to rzucamy błąd!
        const result = await api.get("/posts");
        const mappedPosts = result.data.documents.map((el: any) => {
          return {
            title: el.fields.title.stringValue,
            date: el.fields.date.timestampValue,
            content: el.fields.content.stringValue
          }
        });

        setPosts(mappedPosts);
      } catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
        throw new Error("GET POSTS ERROR")
      }
    };

    fetch();
  }, []);

  return (
    <main>
      <BlogComponent elements={posts}/>
    </main>
  )
});

Blog.displayName = "Blog";
export default Blog;
