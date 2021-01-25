import express from "express";
import next from "next";
import { parse } from "url";
import { join } from "path";
import fs from "fs";

import config from "./config";
import { generateFeed } from "./lib/feed";

const dev = config.NODE_ENV !== "production";
const port = config.PORT;

const app = next({ dev });
const handle = app.getRequestHandler();

const serviceWorkerPath = join(__dirname, ".next", "/service-worker.js");
const serviceWorker = fs.readFileSync(serviceWorkerPath);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/feed/:type?", async (req, res) => {
      const type = req.params.type;

      const feed = await generateFeed();

      const rss = feed.rss2();
      const atom = feed.atom1();
      const json = feed.json1();

      if (type === "atom") {
        res.contentType("application/atom+xml");
        res.send(atom);
        return;
      }

      if (type === "json") {
        res.contentType("application/json");
        res.send(json);
        return;
      }

      res.contentType("application/rss+xml");
      res.send(rss);
      return;
    });

    server.get("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === "/service-worker.js") {
        res.contentType("application/javascript");
        res.send(serviceWorker);
        return;
      }

      return handle(req, res);
    });

    server.post("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
