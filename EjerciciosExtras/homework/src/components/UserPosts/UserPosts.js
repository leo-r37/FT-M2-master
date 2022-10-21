import React from 'react';
import { connect } from 'react-redux';
import { getAllUsersPost } from '../../actions/index';
import { Link } from 'react-router-dom';

import './UserPosts.css';

export class UserPosts extends React.Component {

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getAllUsersPost(userId);
  }
  

  render() {
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.match.params.userId}</h4>
        {this.props.posts.map(p => {
          return (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <Link to={`/users/${p.userId}/posts/${p.id}/comments`} className='button'>Comentarios</Link>
            <hr/>
          </div>
          )
        })}
     

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.userPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsersPost: (id) => dispatch(getAllUsersPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);