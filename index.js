const express = require('express');
const app = express();
const morgan = require("morgan");

app.use(morgan('tiny'));
app.use(express.static('static'));

app.get('/',(req, res)=>{
    res.send("hello fellow devs!");
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})