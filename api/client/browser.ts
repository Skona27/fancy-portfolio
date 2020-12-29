export const instance = (
  url: RequestInfo,
  params?: RequestInit
): Promise<Response> => {
  return fetch(url, params);
};
