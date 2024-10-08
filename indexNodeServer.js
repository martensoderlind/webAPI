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

const fileCheck=(req)=>{
    let content = '';
    if(fs.existsSync(`./static/${req}`)){
        content=req;
    }else{
        content='404.html';
    };
    const file=fs.readFileSync(`./static/${content}`,'utf-8');
    return file;
};

const server = http.createServer((req, res) =>{
    const fileName = fileNameOfUrl(req.url);
    if(fileName==='favicon.ico'){
        res.statusCode = 404;
        res.end('')
        return;
    };
    // const Content = fs.readFileSync(`./static/${fileName}`,'utf-8');
    const Content =fileCheck(fileName); 

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(Content);
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`)
});