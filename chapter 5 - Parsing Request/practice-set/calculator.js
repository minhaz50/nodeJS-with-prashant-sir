const fs = require("fs");

const calculator = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
       <html>
        <head>
        <title>Calculator</title> 
        </head>
         <body>
            <h1>Welcome to Calculator</h1>
            <a href="/calculator">Go To Calculator </a>
        </body>
        </html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
       <html>
        <head>
        <title>Calculator</title> 
        </head>
         <body>
            <h1>Enter Your Number </h1>
        <form action="/calculate-result" method="POST">
        <input type="text" id="username" name="first" placeholder="Enter your First number"/>
        <input type="text" id="second" name="second" placeholder="Enter your second number"/>
        <br><br>
        <button type="submit">Sum</button> 
        </form>
        </body>
        </html>
        `);
    return res.end();
  }
};

module.exports = calculator;
