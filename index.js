const http = require("http");
const port = 3000;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, Glitch!");
  })
  .listen(port);

console.log("Server running", `http://127.0.0.1:${port}`);
