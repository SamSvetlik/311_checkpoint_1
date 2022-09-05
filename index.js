const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const data = require("./data/index")
const sampleUser = require("./data/sampleUser")
let counter = 0
const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})