const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("SErver iS rEadY!");
});

server.listen(2800);
