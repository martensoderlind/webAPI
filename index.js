console.log("started");
const http = require('http');
const fs=require('fs')

const fileNameOfUrl = (url) =>{
    let fileName = '';
    if(url.split('/')[1]===''){
        fileName="index.html"
    } else {
        fileName = url.split('/')[1];
    };
    return fileName;
};

const server = http.createServer((req, res) =>{
    console.log(`The URL for the request was '${req.url}'`);
    console.log(`Method: '${req.method}'`);

    const fileName = fileNameOfUrl(req.url);
    const Content = fs.readFileSync(`./static/${fileName}`,'utf-8');

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(Content);
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`)
});