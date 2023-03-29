const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

/*const getAllUsers = require("./userRoutes")
const createNewUser = require("./userRoutes")*/

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

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