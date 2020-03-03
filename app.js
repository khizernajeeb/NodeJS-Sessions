const express = require("express");
const app = express();
const Users = require("./users");
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/users", Users);

// listen server
app.listen(4000, () => {
  console.log("Server listen on port 4000");
});
