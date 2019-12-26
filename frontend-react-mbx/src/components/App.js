import React from 'react';
import { inject, observer } from 'mobx-react';
import { StateRouter, Link } from 'mobx-state-tree-router';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Tabs, Tab
} from '@material-ui/core';

import views from '../views';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = inject('rootStore')(
  observer(({ rootStore }) => {
    const { recipeStore } = rootStore;
    const { router } = rootStore;
    // const classes = useStyles();
    return (
      <div>
        <header className="App-header">
          <AppBar variant='title' position="static">
            <Typography color="inherit" variant="title">
                Home
            </Typography>
          </AppBar>
        </header>
        <StateRouter router={rootStore.router} />
      </div>
    );
  }
))

export default App;

// import { Link } from "react-router-dom";
// <ListItem button component={Link} to="/design">

// class App extends React.Component {

// <h1>Cookbook App</h1>
// <Link router={rootStore.router} view={views.home}>Home</Link>
// <Link router={rootStore.router} view={views.recipes}>Recipes</Link>
