const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Raw nodejs</title> </head>
        <h1>Enter Your Details </h1>
        <form action="/submit-details" method="POST">
        <input type="text" id="username" name="username" placeholder="Enter your name"/><br><br>
        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label> <br><br>
        <button type="submit">submit</button> 
        </form>
        `);

    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      // }
      // both are same code and giving t he same output.
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<body><h1>Not Found</h1></body>");
  return res.end();
};

module.exports = userRequestHandler;
