import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const phrase = req.query.id as string;
    const postsRef = firestore.collection("posts");
    const postById = await postsRef.doc(phrase).get();
    const postsBySlug = await postsRef.where("slug", "==", phrase).get();

    let post = postById.data();

    if (!post) {
      postsBySlug.forEach(postBySlug => {
        post = postBySlug.data();
      });
    }

    if (!post) {
      res.status(400);
      res.end("Invalid id or slug");
      return;
    }

    res.status(200);
    // Timestamp
    res.json({ ...post, date: post.date.toDate() });
    return;
  } catch (error) {
    res.status(500);
    res.end("Server error");
    return;
  }
}
