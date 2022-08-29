const express = require('express')
const router = express.Router()

/** Note **/
// Notice it is capital R on Router()
// router.get(), router.post()...
// All of route starts with 'users'. So app.get('/users/new') now can be router.get('/new')

router.get("/", (req, res) => {
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("User New Form")
})

module.exports = router //export this router from this file, and import it to server.js