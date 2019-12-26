import React from 'react';
import { inject, observer } from 'mobx-react';
import { StateRouter, Link } from 'mobx-state-tree-router';

import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import views from '../views';

class NavBar extends React.Component {
  render() {
    const { rootStore } = this.props;
    return (
        <List component="nav">
            <ListItem component="div">
              <Link router={rootStore.router} view={views.home}>
                <Typography color="inherit" variant="title">
                    Home
                </Typography>
              </Link>
              <Link router={rootStore.router} view={views.home}>
                <Typography color="inherit" variant="title">
                    Posts
                </Typography>
              </Link>
            </ListItem >
            <StateRouter router={rootStore.router} />
        </List>
    )
  }
}

export default inject('rootStore')(observer(NavBar));

// <ListItemText inset>
//     <Typography color="inherit" variant="title">
//         Home
//     </Typography>
// </ListItemText>
