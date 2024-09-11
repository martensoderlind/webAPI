console.log("started");
const http = require('http');
const fs=require('fs')

const fileName = url =>{
    let fileName = '';
    if(req.url.split('/')[1]===''){
        fileName="index.html"
    } else {
        fileName = req.url.split('/')[1];
    };
    return fileName;
};

const server = http.createServer((req, res) =>{
    console.log(`The URL for the request was '${req.url}'`);
    console.log(`Method: '${req.method}'`);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(fs.readFileSync('./static/index.html','utf-8'));
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`)
});