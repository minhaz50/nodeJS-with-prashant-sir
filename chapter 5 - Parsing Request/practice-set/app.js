const http = require("http");
const calculate = require("./calculator");
const server = http.createServer(calculate);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
