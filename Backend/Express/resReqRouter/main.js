const express = require('express')
const blog = require('./routes/blog.js')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send('Hello this is get')
})

app.get('/about', (req, res) => {
    res.send('Hello this is about')
})

app.post('/', (req, res) => {
    res.send('Hello this is post')
})

app.put('/', (req, res) => {
    console.log(req.body)
    res.send('Hello this is put')
})

app.get('/indexing',(req,res)=>{
    res.sendFile('template/index.html',{root : __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})