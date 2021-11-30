// const http = require("http");
const path = require("path");
// const fs = require("fs");
const express = require("express");
const app = express();
// const router = express.Router();

// const server = http.createServer((req, res) => {
//   // Build file path
//   let filePath = path.join(
//     __dirname,
//     "public",
//     req.url === "/" ? "index.html" : req.url
//   );

//   // Extension of file
//   let extname = path.extname(filePath);

//   // Initial content type
//   let contentType = "text/html";

//   // Check ext and set content type
//   switch (extname) {
//     case ".js":
//       contentType = "text/javascript";
//       break;
//     case ".css":
//       contentType = "text/css";
//       break;
//     case ".svg":
//       contentType = "image/svg+xml";
//       break;
//     case ".png":
//       contentType = "image/png";
//       break;
//     case ".jpg":
//       contentType = "image/jpg";
//       break;
//     case ".gif":
//       contentType = "image/gif";
//       break;
//   }

//   // Check if contentType is text/html but no .html file extension
//   if (contentType == "text/html" && extname == "") filePath += ".html";

//   // log the filePath
//   console.log(filePath);

//   // Read File
//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if (err.code == "ENOENT") {
//         // Page not found
//         fs.readFile(
//           path.join(__dirname, "public", "html", "404.html"),
//           (err, content) => {
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.end(content, "utf8");
//           }
//         );
//       } else {
//         //  Some server error
//         res.writeHead(500);
//         res.end(`Server Error: ${err.code}`);
//       }
//     } else {
  //  //   Success
//       res.writeHead(200, { "Content-Type": contentType });
//       res.end(content, "utf8");
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Port ${port}`);
})