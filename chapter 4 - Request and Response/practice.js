const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/home") {
    res.write("<h2>Welcome to home.</h2>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h2>Welcome to Men.<h2>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h2>Welcome to women.<h2>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h2>Welcome to kids.<h2>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h2>Welcome to cart.<h2>");
    return res.end();
  }
  res.write(`
<html lang="en">
    <head>
    <title>Practice</title>
    </head>
    <body>
        <nav>
         <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
       </nav>
    </body>
</html>
`);
  return res.end();
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
