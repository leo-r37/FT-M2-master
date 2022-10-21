import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import UserPosts from "./components/UserPosts/UserPosts";
import Users from './components/Users/Users';
import CommentsPost from "./components/CommentsPost/CommentsPost";
import Buscador from "./components/Buscador/Buscador";


function App() {
  return (
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users/:userId/posts" component={UserPosts} />
          <Route exact path="/users/:userId/posts/:postId/comments" component={CommentsPost} />
          <Route exact path="/filter/posts" component={Buscador} />
        </Switch>
      </React.Fragment>
  )
}

export default App
