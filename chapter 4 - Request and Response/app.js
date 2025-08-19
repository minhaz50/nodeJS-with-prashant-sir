const http = require("http");
const fs = require("fs");
// ----------------oo-------------------

// function requestListener(req, res) {
//   console.log(req);
// }
// http.createServer(requestListener);
// ----------------oo-------------------

// Both code are same. But this code look shorter and look better.

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raw nodejs</title> </head>");
    res.write("<h1>Enter Your Details </h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"<br><br>'
    );
    res.write('<label for="gender">Gender:</label>');

    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label> <br><br>');

    res.write('<button type="submit">submit</button>');
    res.write("</form>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "Minhaz");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<body><h1>Not Found</h1></body>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
