import { useRouter } from "next/router";
import { Languages } from "./types";

export const defaultLang: Languages = "pl";

export function useLang(): Languages {
  const { locale } = useRouter();
  return (locale as Languages) || defaultLang;
}
