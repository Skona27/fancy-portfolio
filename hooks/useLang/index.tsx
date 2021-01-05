import { useRouter } from "next/router";
import { Languages } from "./types";

export const defaultLang: Languages = "en-US";

export function useLang(): Languages {
  const { locale } = useRouter();
  return (locale as Languages) || defaultLang;
}
