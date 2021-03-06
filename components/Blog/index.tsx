import * as React from "react";
import dayjs from "dayjs";
import { IPost } from "./types";
import { Group } from "./Components";

interface IProps {
  heading: string;
  elements: IPost[] | null;
}

export const Blog: React.FC<IProps> = React.memo(({ elements, heading }) => {
  const groupedPosts = React.useMemo(() => {
    if (!elements) {
      return;
    }

    const postsWithYear = elements.map((post) => {
      const year = dayjs(post.date).format("YYYY");
      const dayMonth = dayjs(post.date).format("DD/MM");
      return { ...post, year, dayMonth };
    });

    const uniqueYears = postsWithYear
      .map((post) => post.year)
      .filter((post, index, arr) => {
        return arr.indexOf(post) === index;
      });

    return uniqueYears.map((year) => {
      const postsFromYear = postsWithYear.filter((post) => post.year === year);
      return { year, elements: postsFromYear };
    });
  }, [elements]);

  if (!groupedPosts) {
    return null;
  }

  return (
    <>
      <h1>{heading}</h1>
      {groupedPosts.map((group, ind) => (
        <Group
          key={`group-${ind}`}
          year={group.year}
          elements={group.elements}
        />
      ))}
    </>
  );
});

Blog.displayName = "Blog";
