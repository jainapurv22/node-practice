const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("Welcome for practice")
})

server.listen(5000)