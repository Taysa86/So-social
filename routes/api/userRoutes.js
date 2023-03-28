const router = require("express").Router();


//pulls form user controller
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
  addNewFriend,
  deleteFriend,

} = require("../../controllers/userController");

//get, post, delete routes
router.route("/user").get(getAllUsers).post((req, res, next) => {
  console.log("POST request called");
  createNewUser(req); 
  res.end();
});

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addNewFriend).delete(deleteFriend);

module.exports = router;