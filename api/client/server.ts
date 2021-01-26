import { config } from "../../config/server";

export const instance = (
  url: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  const fullUrl = config.SERVER_HOST + url;
  return fetch(fullUrl, init);
};
