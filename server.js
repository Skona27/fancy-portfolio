const express = require("express");
const next = require("next");
const { parse } = require("url");
const { join } = require("path");
const fs = require("fs");

const config = require("./config");

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

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
