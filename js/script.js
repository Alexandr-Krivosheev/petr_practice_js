'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посметрели?', '');
    while(personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посметрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const firstFilm = prompt('Один из последних просмотренных фильмов?', '');
            const firstEstimation = prompt('На сколько оцените его?', '');

            if (firstFilm != null && firstEstimation != null && firstFilm !== '' && firstEstimation !== '' && firstFilm.length < 50) {
                personalMovieDB.movies[firstFilm] = firstEstimation;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log()
        }else if (personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('error');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (genre === '' || genre === null){
                console.log('Вы ввели некоректное сообщение')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i - 1} - это ${item}`);
        });
    }
};
