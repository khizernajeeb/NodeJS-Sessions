const router = require("express").Router();
const usersData = require("./users.json");
var fs = require("fs");
const authorization = require("./auth");

function getUser(userId) {
  return usersData.filter(user => user.id == userId);
}

function deleteUser(userId) {
  let findUser = usersData.find(user => user.id == userId);

  if (findUser) {
    let users = usersData.filter(user => user.id != userId);
    var json = JSON.stringify(users);

    fs.writeFile("users.json", json, "utf8", function() {
      console.log("Complete");
    });
    return `user id  ${userId} has been deleted`;
  } else {
    return "No record found";
  }
}

const createNewUser = reqParams => {
  const { name, age } = reqParams;
  const id = usersData[usersData.length - 1].id + 1;
  const user = { id, name, age };

  usersData.push(user);
  var json = JSON.stringify(usersData);

  fs.writeFile("users.json", json, "utf8", function() {
    console.log("Added new record");
  });

  return usersData;
};

router.get("/", authorization, (req, res) => {
  res.status(200).send(usersData);
});

router.get("/:id", authorization, (req, res) => {
  res.status(200).send(getUser(req.params.id));
});

router.delete("/:id", authorization, (req, res) => {
  res.status(200).send(deleteUser(req.params.id));
});

router.post("/", authorization, (req, res) => {
  res.status(201).send(createNewUser(req.body));
});

module.exports = router;
