const express = require('express')
const app = express()
const formidable = require('express-formidable')
const fs = require('fs')

app.use(express.static("public"))
app.use(formidable())

//GET requests
app.get('/get-posts', function (req, res) {
  console.log('Getting posts')
  res.sendFile(__dirname + '/data/posts.json')
})

//POST requests
app.post('/create-post', function (req, res) {
  let file = fs.readFileSync(__dirname + '/data/posts.json', 'utf8')
  let posts = JSON.parse(file)
  posts[Date.now()] = req.fields.blogpost
  let postsJSON = JSON.stringify(posts)

  fs.writeFile(__dirname + '/data/posts.json', postsJSON, function (error) {
    if (error) {
      console.log(error)
    } else {
      res.sendStatus(200)
    }
    console.log("Added New Blog Post: " + JSON.stringify(req.fields))
  })
})

//Run server
app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!')
})
