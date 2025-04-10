const express = require('express')
const app = express()
const port = 3000
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now" ;
  res.render('index',{siteName : siteName , searchText : searchText});
})

// app.get('/blog/', (req, res) => {
//   res.sendFile('template/index.html',{root:__dirname})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})