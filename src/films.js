// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
   
  const directors = array.map((item) => item.director)
    
  return directors;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const directorsMovies = array.filter((item) => item.director === director);

  return directorsMovies
 }

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const averageMovies = array.reduce((acc, currentValue) =>{ return currentValue.director == director ? acc + currentValue.score : acc },0);
  
  return  averageMovies / getMoviesFromDirector(array, director).length;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const titleMovies = array.map((item) => item.title);
  const orderMovies = titleMovies.sort()

  return orderMovies.slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const _movies = array.map((item) => {return item});

  return _movies.sort((a, b) => {

  if (a.year > b.year) {
    return 1
  }
  if (a.year < b.year) {
    return -1
  }
  if (a.title > b.title) {
    return 1
  }
  if (a.title < b.title) {
    return -1
  }

});

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

const moviesGenre = array.filter(item =>(item.genre).includes(genre) && item.score != '')

const scoreGenre = moviesGenre.map(item => item.score)

const reducer = (acc, currentValue) => acc + currentValue;

let averageMovies = scoreGenre.reduce(reducer) / moviesGenre.length;

return averageMovies

}
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let regexNumber = /(\d+)/g;

  let newArrMovies = array.map(newMovies);

  function newMovies(el) {
    return {
      ...el
    }
  }

  let result = newArrMovies.map(cambioDuracionMovies);

  function cambioDuracionMovies(movie) {
    movie.duration = (movie.duration).match(regexNumber);
    switch (movie.duration[0]) {
      case "0":
        if (movie.duration[1]) {
          movie.duration = 0 + parseInt(movie.duration[1])
        }
        break;
      case "1":
        if (movie.duration[1]) {
          movie.duration = 60 + parseInt(movie.duration[1])
        }
        break;
      case "2":
        if (movie.duration[1]) {
          movie.duration = 120 + parseInt(movie.duration[1])

        }
        else {
          movie.duration = 120
        }
        break;
      case "3":
        if (movie.duration[1]) {
          movie.duration = 180 + parseInt(movie.duration[1])
        }
        break;
      case "4":
        if (movie.duration[1]) {
          movie.duration = 240 + parseInt(movie.duration[1])
        }
        break;
      case "5":
        if (movie.duration[1]) {
          movie.duration = 300 + parseInt(movie.duration[1])
        }
        
        break;
    }
    return movie;
  }

    return result;
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  
  const arrMoviesForYear = array.filter(movie =>
    movie.year == year
)

const arrScoreByYear = arrMoviesForYear.map(movie =>
    movie.score
)

const bestScore = Math.max.apply(null, arrScoreByYear)

const bestMovieOfYear = arrMoviesForYear.find(movie =>
    movie.score == bestScore
)

const result = [];

result.push(bestMovieOfYear);

return result
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
