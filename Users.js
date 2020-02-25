const router = require('express').Router();
const fs = require('fs');

const rawData = fs.readFileSync('./users.json');
const users = JSON.parse(rawData);

function findAll() {
    return users;
}

function findUsers(name) {
    const filteredUsers =  users.find(user => user.name === name);
    if(!filteredUsers) {
        throw new Error("user not found")
    }
    return filteredUsers;
}

router.get('/', (req, res) => {
    res.send(findUsers("Khizer"));
});



module.exports = router;