import { IPost } from "../components/Blog/types";
import { client } from "./client";

export const getAllPosts = async (): Promise<IPost[]> => {
  try {
    const result = await client(`/api/posts`);
    return result.json();
  } catch (err) {
    throw new Error();
  }
};
