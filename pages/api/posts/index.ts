import { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "../../../components/Blog/types";
import { firestore } from "../../../firebase";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const postsCollection = await firestore
      .collection("posts")
      .orderBy("date", "desc")
      .get();

    const posts: IPost[] = [];

    postsCollection.forEach(post => {
      const data = post.data();
      posts.push({ ...data, date: data.date.toDate() } as IPost);
    });

    res.status(200);
    res.json(posts);
    return;
  } catch (error) {
    res.status(500);
    res.end("Server error");
    return;
  }
}
