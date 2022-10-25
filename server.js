const http = require("http");

const server = http.createServer((req, res) => {
    console.log("giri nakate")
})

server.listen(3000);