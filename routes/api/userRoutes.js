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
router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addNewFriend).delete(deleteFriend);

module.exports = router;