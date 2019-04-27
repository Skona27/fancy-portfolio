import {IHeader} from "../components/Header/types";

export const headerData: IHeader = {
  title: "Jakub Skoneczny",
  subtitle: "javascript developer",
  image: {
    url: "http://192.168.1.34:3000/static/img/profile-photo.jpg",
    alt: "Moje zdjęcie profilowe"
  },
  elements: [
    {
      href: "/",
      title: "o mnie"
    },
    {
      href: "/realizacje",
      title: "realizacje"
    },
    {
      href: "/projekty",
      title: "projekty"
    }, {
      href: "/blog",
      title: "blog"
    }
  ]
};
