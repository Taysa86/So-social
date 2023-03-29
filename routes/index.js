const router = require("express").Router();
const apiRoutes = require("./api");

/*const getAllUsers = require("./api/userRoutes")
const createNewUser = require("./api/userRoutes")*/

router.use("/", apiRoutes);

/*router.route("/user")
  .get(function (req, res, next) {
    console.log("GET request called");
    getAllUsers(req);
    res.end();
  })
  .post(function (req, res, next) {
    console.log("POST request called");
    createNewUser(req); 
    res.end();
  });*/

module.exports = router;

