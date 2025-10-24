// app.js

const { createServer } = require("http");
const { parse } = require("url");

const nextServer = require("./.next/standalone/server");

const port = process.env.PORT || 3000;

const handler = nextServer.default;

createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  handler(req, res, parsedUrl);
}).listen(port, (err) => {
  if (err) throw err;
  console.log(`> Next.js Standalone App is Ready on http://localhost:${port}`);
  console.log(`> Running in Production Mode.`);
});
