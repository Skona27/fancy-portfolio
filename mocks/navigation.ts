import {INavigation} from "../components/Navigation/types";

export const navigationMock: INavigation = {
  imageURL: "http://localhost:3000/static/img/profile-photo.jpg",
  title: "Jakub Skoneczny",
  subtitle: "javascript developer",
  activePage: "/",
  links: [
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
