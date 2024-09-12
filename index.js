const express = require('express');
const app = express();
const db =[
{
  id: 1,
  name: "Mårten Dev",
  email: 'mårten@salt.dev'
}
];


app.get('/', (req, res) => {
    res
      .status(201)
      .setHeader(`location`,`/api/developer/2`)
      .json(dev)
  });

const port = 3000;
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})