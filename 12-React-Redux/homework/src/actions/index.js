const apiKey = "c22b3e32";

export function getMovies(titulo) {
    return dispatch => {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function getMovieDetail(id) {
    return dispatch => {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
  }

export function addMovieFavorite (payload) {
    return {
        type: 'ADD_MOVIE_FAVORITE',
        payload  //titulo de la pelicula a agregar
    }
}

export function removeMovieFavorite (payload) {
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload //  titulo de la pelicula a eliminar
    }
}

