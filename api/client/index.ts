let instance: (url: RequestInfo, init?: RequestInit) => Promise<Response>;

if (typeof window === "undefined") {
  // eslint-disable-next-line global-require
  instance = require("./server").instance;
} else {
  // eslint-disable-next-line global-require
  instance = require("./browser").instance;
}

export const client = instance;
