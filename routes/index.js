const router = require("express").Router();
const apiRoutes = require("./api");

const createNewUser = require("./api/userRoutes")

router.use("/", apiRoutes);


module.exports = router;

