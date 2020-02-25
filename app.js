const express = require('express');
const app = express();
const axios = require('axios');


async function allFilms() {
    let response  = await axios.get('https://swapi.co/api/films').then(res => res.data.results);
    let films = response.map(record => record.title + ' resleased on ' + record.release_date);
    console.log(`Assignment 1: All Star Wars Films available to download\n${films.toString().split(",").join("\n")}`);
}

async function searchFilm(filmName) {
    let response  = await axios.get('https://swapi.co/api/films').then(res => res.data.results);
    let film = response.find(record => record.title == filmName);
    console.log(`\nAssignment 2: ${film.title} is available to download`);
}

allFilms();
searchFilm("The Phantom Menace");

// listen server
app.listen(4000, () => {
    console.log("Server listen on port 4000")
})
