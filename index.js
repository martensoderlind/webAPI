console.log("started");
const http = require('http');
const fs=require('fs')


const server = http.createServer((req, res) =>{
    res.statusCode=200;
    // res.setHeader('Content-Type','text/plain');
    res.setHeader('Content-Type','text/html');
    res.end(fs.readFileSync('./static/index.html','utf-8'));
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`)
});