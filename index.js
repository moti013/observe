const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    var filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    console.log(filePath);
    var contentType = "text/html";
  } else {
    var filePath = path.join(__dirname, "public", req.url);
    console.log(filePath);
    var extname = path.extname(filePath);
    var contentType = "text/html";
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
      case ".svg":
        contentType = "image/svg+xml";
        break;
      case ".wav":
        contentType = "audio/wav";
        break;
      case ".mp4":
        contentType = "video/mp4";
        break;
      case "xml":
        contentType = "application/xml";
        break;
      default:
        contentType = "text/html";
        break;
    }
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // File not found
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
