const express = require('express')
const fs = require('fs')
const blog = require('./routes/blog.js')
const app = express()
const port = 3000

app.use('/blog' , blog);

// middleware 1
app.use((req,res,next)=>{
    fs.appendFileSync('log.txt',`date : ${Date.now()} and it is ${req.method}\n`);
    req.sushanth = "I am sushanth";
    // res.send('hello'); // if we are sending the res in the middleware then no need next()
    next();
})

// middleware 2
app.use((req,res,next)=>{
    console.log('m2');
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send(req.sushanth);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})