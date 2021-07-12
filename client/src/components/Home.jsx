import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import UserNavigation from 'components/UserNavigation';
import Todos from 'components/Todos';
import NewTodo from 'components/NewTodo';

export default class Home extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Router>
        <div>
          <UserNavigation />
          <Switch>
            <Route exact path='/'>
              <Todos />
            </Route>
            <Route path='/todos/new'>
              <NewTodo />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
