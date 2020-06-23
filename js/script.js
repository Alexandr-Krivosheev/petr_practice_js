'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
for (let i = 0; i < 2; i++) {
    const firstFilm = prompt('Один из последних просмотренных фильмов?', '');
    const firstEstimation = prompt('На сколько оцените его?', '');

    if(firstFilm !== null && firstEstimation !== null && firstFilm !== '' && firstEstimation !== '' && firstFilm.length < 50){
        personalMovieDB.movies[firstFilm] = firstEstimation;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
// let num = 0;
// while(num < 2){
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//
//     if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else {
//         console.log('error');
//         num--;
//     }
//     num++;
// }

if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log()
}else if (personalMovieDB.count > 30){
    console.log('Вы киноман');
} else {
    console.log('error');
}


console.log(personalMovieDB);