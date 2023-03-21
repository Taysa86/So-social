const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => res.send("Error!! Wrong route! Error!!"));

module.exports = router;