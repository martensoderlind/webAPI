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

app.use(express.json());

app.get('/api/developers',(req, res)=>{
  res.json(db);
});

app.get('/api/developers/:id',(req, res)=>{
  const dev = db.find((dev)=>dev.id==req.params.id);
  return dev ? 
    res.json(dev):
    res.status(404).end();
});

app.post('/api/developers/',(req,res)=>{
  const newDev={
    id: db.length+1,
    name: req.body.name,
    email: req.body.email
  };
  db.push(newDev);
  res
    .status(201)
    .setHeader(`location`,`/api/developer/${newDev.id}`)
    .json(newDev);
});

app.delete('/api/developers/:id',(req, res)=>{
  const dev = db.findIndex((dev)=>dev.id==req.params.id);
  if(dev!==-1){
    db.splice(dev,1);
    res.status(204).end();
  }else{
    res.status(404).end();
  };
});

app.patch('/api/developers/:id',(req, res)=>{
  const index = db.findIndex((dev)=>dev.id==req.params.id);
  if(index !==-1){
    db[index]={
      id: db[index].id,
      name: req.body.name,
      email: req.body.email
    };
    return res 
    .status(201)
    .setHeader(`location`,`/api/developer/`)
    .json(db[index]);
  }else{
    return res.status(404).end();
  };
});


const port = 3000;
app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})

module.exports = {
  app
}