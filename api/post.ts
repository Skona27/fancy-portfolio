import { IPost } from "../components/Blog/types";
import { client } from "./client";

export const getSinglePost = async (idOrSlug: string): Promise<IPost> => {
  try {
    const result = await client(`/api/posts/${idOrSlug}`);
    return result.json();
  } catch (err) {
    throw new Error();
  }
};
