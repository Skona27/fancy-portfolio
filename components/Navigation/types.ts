export interface INavigation {
  imageURL: string;
  title: string;
  subtitle: string;
  activePage: string;
  links: ILink[];
}

interface ILink {
  href: string;
  title: string;
}