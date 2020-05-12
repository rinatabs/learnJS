'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
 }
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено очень мало фильмов");
    
    } else if (personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }
    
}

detectPersonalLevel();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов?',''), 
            b = prompt('На сколько его оцените?','');
    
            
            if(a != null && a.length < 50 && a.length > 0  && b != null && b.length > 0) { 
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
    
    }
}
rememberMyFilms();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }

}

showMyDB();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i + 1}`, ``);
        if(a != null && a.length < 50 && a.length > 0) {
            personalMovieDB.genres[i] = a;
        } else {
            i--;
        }
    }
}

writeYourGenres();




