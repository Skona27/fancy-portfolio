import * as React from 'react';
import {useTheme} from "../hooks/Theme";
import {posts} from "../mocks/blog";
import moment from "moment";

const Blog = React.memo(() => {
  const {colors, bp} = useTheme();

  const groupedPosts = React.useMemo(() => {
    const postsWithYear = posts.map(post => {
      const year = moment(post.date).format("YYYY");
      const dayMonth = moment(post.date).format("DD/MM");
      return {...post, year, dayMonth}
    });

    const uniqueYears = postsWithYear.map(post => post.year).filter((post, index, arr) => {
      return arr.indexOf(post) === index;
    });

    return uniqueYears.map(year => {
      const postsFromYear = postsWithYear.filter(post => post.year === year);
      return {year, posts: postsFromYear};
    });
  }, [posts]);

  return (
    <main>
      {groupedPosts.map((group, ind) => (
        <section key={ind}>
          <h2 css={{
            fontSize: "2rem",
            [bp.fromTablet]: {
              fontSize: "1.75rem"
            },
            [bp.fromMobile]: {
              fontSize: "1.5rem"
            }
          }}>{group.year}</h2>

          <ul css={{
            marginLeft: 20
          }}>
            {group.posts.map(post => (
              <li key={post.id}
                  css={{
                    color: colors.pink,
                    margin: ".6rem 0",
                    [bp.fromTablet]: {
                      margin: ".3rem 0"
                    }
                  }}>
                <article css={{color: colors.secondary}}>
                  <h3 css={{
                    display: "inline",
                    letterSpacing: 1,
                    fontWeight: 400,
                    borderBottom: `3px solid transparent`,
                    cursor: "pointer",
                    padding: 2,
                    marginRight: 20,
                    "&:hover": {
                      borderColor: colors.pink
                    }
                  }}>
                    {post.title}
                  </h3>
                  <span css={{fontSize: ".875rem", letterSpacing: 1}}>{post.dayMonth}</span>
                </article>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
});

Blog.displayName = "Blog";
export default Blog;