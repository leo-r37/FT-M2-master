import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          
          {this.props.favs.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.title}
                </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>❌</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favs: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
}

// addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
