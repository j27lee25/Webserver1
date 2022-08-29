// Minimum code requirement to open a server. 
// ExpressJS - Hello World: https://www.tutorialspoint.com/expressjs/expressjs_quick_guide.htm
const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});

// Codes for reference
// app.get('/api/pet', (req, res) => {
//   res.send('Welcome to the pet page.')
//   res.sendFile(__dirname +'/index.html')
//   res.json({message: "Error"})
// });

app.get("/", (req, res) => {
  console.log('Welcome')
  res.render("index", {message1:"hello world!"})  // rendering an object
})
