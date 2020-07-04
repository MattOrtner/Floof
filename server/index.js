const express = require('express')
const path = require('path')

const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, 'build')))

//Basic HTTP Methods
// get: read
// post: create
// delete: destroying 
// put/patch: updating

app.get('/ping', (request, response) => {
  console.log('We in that ping life', request);
  response.json({ pong: true })
  
})

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(port, () => {

  console.log(`server started on ${port}`);
  
})