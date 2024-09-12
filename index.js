const express = require('express');
const app = express();
const db =[
{
  id: 1,
  name: "Mårten Dev",
  email: 'mårten@salt.dev'
},
{
  id: 2,
  name: "Marcus Dev",
  email: 'marcus@salt.dev'
},
];


app.get('/', (req, res) => {
    res
      .status(201)
      .setHeader(`location`,`/api/developer/1`)
      .json(db[0])
  });

  app.get('/api/developers',(req, res)=>{
    res.json(db);
  });

  app.get('/api/developers/:id',(req, res)=>{
    const dev = db.find((dev)=>dev.id==req.params.id);
    return dev ? 
      res.json(dev):
      res.status(404).end();
  });

const port = 3000;
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})