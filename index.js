const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const prog = express();

prog.use(express.urlencoded({ extended: true }));
prog.use(express.json());
prog.use(routes);

db.once("open", () => {
    prog.listen(PORT, () => {
      console.log(`Port ${PORT} is running!`);
    });
  });
