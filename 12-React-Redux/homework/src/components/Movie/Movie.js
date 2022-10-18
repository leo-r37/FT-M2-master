import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import s from './Movie.module.css';

class Movie extends React.Component {

    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }

    render() {
        return (
            <div className={s.body}>
                <div className={s.container}>          
                
                    <div className={s.imgContainer}>
                        <img src={this.props.movie.Poster} alt='Poster'/>
                    </div>

                    <div className={s.dataContainer}>
                        <h4>{this.props.movie.Title}</h4>
                        <p>{this.props.movie.Year} | {this.props.movie.Rated} </p> 
                        <p>Reparto: {this.props.movie.Actors}</p>
                        <p>Duración: {this.props.movie.Runtime} Género: {this.props.movie.Genre}</p>
                        <p>Sinópsis: {this.props.movie.Plot}</p>
                        <p>Dirección: {this.props.movie.Director}</p>
                        <p>Escritores: {this.props.movie.Writer}</p>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);