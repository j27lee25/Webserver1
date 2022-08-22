// Minimum code requirement to open a server. 
// ExpressJS - Hello World: https://www.tutorialspoint.com/expressjs/expressjs_quick_guide.htm
const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});

// Handle Get Requests
app.get('/api/pet', function(req, res){
  res.send('Welcome to the pet page.')
});
app.get('/api/toy', function(req, res){
  res.send('Welcome to the toy page.')
});

app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html')
});
