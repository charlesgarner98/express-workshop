var express = require('express');
var app = express();

//GET requests
app.get("/", function (req, res) {
  res.send("Yay Node Girls!");
});
app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});
app.get("/node", function (req, res) {
    res.send("This is the node endpoint");
});
app.get("/girls", function (req, res) {
    res.send("This is the girls endpoint");
});

//Run server
app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
})
