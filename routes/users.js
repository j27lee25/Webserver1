const express = require("express");
const router = express.Router();

/** Note **/
// Notice it is capital R on Router()
// router.get(), router.post()...
// All of route starts with 'users'. So app.get('/users/new') now can be router.get('/new')

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user by id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update a user by id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete a user by id ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Create a new user`);
  });

router.route("/new", (req, res) => {
  res.send("User New Form");
});

module.exports = router; //export this router from this file, and import it to server.js
