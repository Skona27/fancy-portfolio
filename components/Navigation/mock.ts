import {INavigation} from "./types";

export const navigationMock: INavigation = {
  imageURL: "http://localhost:3000/static/img/profile-photo.jpg",
  title: "Jakub Skoneczny",
  subtitle: "javascript developer",
  activePage: "o-mnie",
  links: [
    {
      href: "o-mnie",
      title: "o mnie"
    },
    {
      href: "realizacje",
      title: "realizacje"
    },
    {
      href: "projekty",
      title: "projekty"
    }, {
    href: "blog",
    title: "blog"
  }
    ]
};
