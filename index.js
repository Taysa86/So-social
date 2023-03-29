const express = require("express");
const routes = require("./routes");
const db = require("./config/connections");
//const express = require('express');
//const app = express();
const router = express.Router();
//const PORT = 3000;

const PORT = process.env.PORT || 3001;

const app = express();

//const getAllUsers = require("./routes/api/userRoutes")
//const createNewUser = require("./routes/api/userRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json(),router);
app.use(routes);

// Multiple routing

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



/*app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
})*/

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Port ${PORT} is running!`);
    });
  });
