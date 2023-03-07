const http = require("http")

const server = http.createServer((request, response) => {
    responde.end("probando")
})
const puerto = 8080;

server.listen(puerto,() => {
    console.log("escuchando puerto 8080")
})