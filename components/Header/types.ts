export interface IHeader {
  title: string;
  subtitle: string;
  elements: INavigationItem[];
  image: {
    url: string;
    alt: string;
  };
}

export interface INavigationItem {
  href: string;
  title: string;
}
