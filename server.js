const express = require("express");
const next = require("next");
const { parse } = require("url");
const { join } = require("path");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT | 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/post/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === "/service-worker.js") {
        const filePath = join(__dirname, ".next", pathname);

        console.log(filePath);

        return app.serveStatic(req, res, filePath);
      }

      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
