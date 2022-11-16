const http = require("http")
const { readFileSync } = require("fs")

const homePage = readFileSync("./index.html")
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text-html'})
    res.write(homePage)
    res.end()
})

server.listen(5000)