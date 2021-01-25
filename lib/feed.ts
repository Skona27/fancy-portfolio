import { Feed } from "feed";
import { firestore } from "../firebase";
import { constants } from "../data/constants";
import { blog as blogData } from "../data/blog";

export async function generateFeed() {
  const date = new Date();

  const lang = "en-US";
  const author = {
    name: constants.author,
    email: constants.email,
    link: constants.twitterLink,
  };

  const feed = new Feed({
    author,
    title: blogData[lang].title,
    description: blogData[lang].description,
    id: constants.baseUrl,
    link: `${constants.baseUrl}/blog`,
    language: lang,
    updated: date,
    image: `${constants.baseUrl}/static/img/profile-photo.jpg`,
    favicon: `${constants.baseUrl}/static/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${constants.author}`,
    generator: "Feed for Node.js",
    feedLinks: {
      json: `${constants.baseUrl}/feed/json`,
      atom: `${constants.baseUrl}/feed/atom`,
      rss2: `${constants.baseUrl}/feed/rss2`,
    },
  });

  const postsCollection = await firestore
    .collection("posts")
    .orderBy("date", "desc")
    .get();

  postsCollection.forEach((post) => {
    const data = post.data();

    const url = `${constants.baseUrl}/post/${data.slug}`;

    feed.addItem({
      title: data.title,
      id: url,
      link: url,
      author: [author],
      contributor: [author],
      date: data.date.toDate(),
      published: data.date.toDate(),
    });
  });

  return feed;
}
