import * as React from 'react';
import {useTheme} from "../../../hooks/Theme";
import {IPost, IPostGroup} from "../types";
import {Post} from "./Post";

interface IPostWithDate extends IPost {
  dayMonth: string;
}

export const Group: React.FC<IPostGroup> = React.memo(({year, elements}) => {
  const {bp} = useTheme();

  return (
    <section>
      <h2 css={{
        fontSize: "2rem",
        [bp.fromTablet]: {
          fontSize: "1.75rem"
        },
        [bp.fromMobile]: {
          fontSize: "1.5rem"
        }
      }}>
        {year}
      </h2>

      <ul css={{
        marginLeft: 20
      }}>
        {elements.map((post, ind) => (
          <Post key={`post-${ind}`} {...post as IPostWithDate} />
        ))}
      </ul>
    </section>
  )
});

Group.displayName = "Group";
