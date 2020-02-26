const express = require('express');
const app = express();
const starWars = require('./starWars');


app.use('/', starWars);


// listen server
app.listen(4000, () => {
    console.log("Server listen on port 4000")
})
