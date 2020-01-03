import { api } from "./index";
import { IPost } from "../components/Blog/types";

export const getAllPosts = async (): Promise<IPost[]> => {
  // Dane z Firebase przychodzą w dziwnym JSON-nie
  // Próbujemy przemapować na YOLO, jak będzie źle to rzucamy błąd!
  try {
    const result = await api.get("/posts?orderBy=date");
    return result.data.documents.reverse().map((el: any) => {
      return {
        id: el.name.split("/posts/")[1],
        title: el.fields.title.stringValue,
        date: el.fields.date.timestampValue,
        content: el.fields.content.stringValue
      };
    });
  } catch (err) {
    throw new Error();
  }
};
