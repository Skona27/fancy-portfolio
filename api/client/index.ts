let instance: (url: RequestInfo, init?: RequestInit) => Promise<Response>;

if (typeof window === "undefined") {
  instance = require("./server").instance;
} else {
  instance = require("./browser").instance;
}

export const client = instance;
