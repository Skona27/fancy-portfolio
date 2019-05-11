import { api } from "./index";
import { IPost } from "../components/Blog/types";

export const getSinglePost = async (id: string): Promise<IPost> => {
  // Dane z Firebase przychodzą w dziwnym JSON-nie
  // Próbujemy przemapować na YOLO, jak będzie źle to rzucamy błąd!
  try {
    const result = await api.get(`/posts/${id}`);
    return {
      id: result.data.name.split("/posts/")[1],
      title: result.data.fields.title.stringValue,
      date: result.data.fields.date.timestampValue,
      content: result.data.fields.content.stringValue
    };
  } catch (err) {
    throw new Error();
  }
};
