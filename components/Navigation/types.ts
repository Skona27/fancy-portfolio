export interface INavigation {
  imageURL: string;
  title: string;
  subtitle: string;
  activePage: "o-mnie"
  links: ILink[];
}

interface ILink {
  href: string;
  title: string;
}