console.log("started");

const server = http.createServer((req, res) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello fellow developer!');
});