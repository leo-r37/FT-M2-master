import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getAllPost } from "../../actions";

import './Buscador.css';

export class Buscador extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtrados: [],
      postsSearch: '',
    }
}

  componentDidMount() {
    this.props.getAllPost();
    this.setState({
      filtrados: this.props.posts
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
     filtrados: this.props.posts.filter(p => p.title.includes(this.state.postsSearch))
    })
    this.setState({
      postsSearch: ""
    })
  }
  
  viewAllPost(){
    this.setState({
      filtrados: this.props.posts
    })
  }

  handleChange(e) {
    this.setState({
      postsSearch: e.target.value
    })
  }

  render() {
   const {  postsSearch } = this.state;
    return (
      <div className= "details">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="user">Posts: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={ postsSearch }
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        
        <button className="btn2" onClick={() => this.viewAllPost()}>VER TODOS</button>

        <div className="details">
          <h4 className="title">Posts </h4>
          {this.state.filtrados.map(p => {
            return (
              <div  key={p.id}>
                <h4>{p.title}</h4>
                <p>UserId: {p.userId}</p>
                <p>{p.body}</p>
                <hr/>
              </div>
            )
          })}
                
      
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPost: () => dispatch(getAllPost())
  };
}

function mapStateToProps(state) {
  return {
      posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);