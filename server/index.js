const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/', express.static(path.join(__dirname, '../client/public')))


app.get('/login', function(req, res) {
  res.send("login page")
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
