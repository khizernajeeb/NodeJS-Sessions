const router = require('express').Router();
const axios = require('axios');



async function allFilms() {
    let response  = await axios.get('https://swapi.co/api/films').then(res => res.data.results);
    let films = response.map(record => record.title + ' resleased on ' + record.release_date);
    console.log(`Assignment 1: All Star Wars Films available to download\n${films.toString().split(",").join("\n")}`);
    return `All Star Wars Films available to download<br/><br/> ${films.toString().split(',').join("<br/>")}`;
}

async function searchFilm(filmName) {
    let response  = await axios.get('https://swapi.co/api/films').then(res => res.data.results);
    let film = response.find(record => record.title == filmName);
    console.log(`\nAssignment 2: ${film.title} is available to download`);
    return `${film.title} is available to download`;

}

router.get('/', async  (req, res) => {
    res.send(await allFilms());
});

router.get('/:name', async  (req, res) => {
    res.send(await searchFilm(req.params.name));
});


module.exports = router;