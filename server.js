// Minimum code requirement to open a server. 
// ExpressJS - Hello World: https://www.tutorialspoint.com/expressjs/expressjs_quick_guide.htm
const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});


app.get("/", (req, res) => {
  console.log('Welcome')
  res.render("index")
})

const userRouter = require('./routes//users') // import the file we created from users.js

app.use('/users', userRouter) //