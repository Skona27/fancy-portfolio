export interface IPostGroup {
  year: string;
  elements: IPost[];
}

export interface IPost {
  id: string;
  title: string;
  date: string;
  content: string;
}