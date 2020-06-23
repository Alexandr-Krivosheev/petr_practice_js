'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const firstFilm = prompt('Один из последних просмотренных фильмов?','');
const firstEstimation = prompt('На сколько оцените его?','');
const secondFilm = prompt('Один из последних просмотренных фильмов?','');
const secondEstimation = prompt('На сколько оцените его?','');

personalMovieDB.movies[firstFilm] = firstEstimation;
personalMovieDB.movies[secondFilm] = secondEstimation;

console.log(personalMovieDB);