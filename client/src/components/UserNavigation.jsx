import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import {
  Container,
  AppBar,
  Tab,
  Typography,
} from '@material-ui/core';

const styles = {
  root: {
    marginBottom: 16,
  },
  container: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  link: {
    marginRight: 18,
  },
};

const activeLinkStyle = {
  color: indigo[500],
};

class UserNavigation extends Component {
  static propTypes = {

  };

  render() {
    const {
      classes,
    } = this.props;

    return (
      <AppBar
        className={classes.root}
        position='static'
        color='default'>
        <Container maxWidth='sm' className={classes.container}>
          <nav>
            <NavLink
              to='/'
              exact
              activeStyle={activeLinkStyle}
              className={classes.link}>
              <Typography variant='button' component='span'>
                Todos
              </Typography>
            </NavLink>
            <NavLink
              to='/todos/new'
              activeStyle={activeLinkStyle}
              className={classes.link}>
              <Typography variant='button' component='span'>
                New todo
              </Typography>
            </NavLink>
          </nav>
        </Container>
      </AppBar>
    );
  }
}

export default withStyles(styles)(UserNavigation);
