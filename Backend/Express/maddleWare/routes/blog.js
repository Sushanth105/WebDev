const express = require('express')
const router = express.Router()

// this is the middelWare for every router
router.use((req,res,next)=>{
  console.log(Date.now());
  next();
})

// define the home page route
router.get('/', (req, res) => {
  res.send('blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

module.exports = router