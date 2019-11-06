import React from 'react';
import { inject, observer } from 'mobx-react';
import { StateRouter, Link } from 'mobx-state-tree-router';

import views from '../views';

class App extends React.Component {
  render() {
    const { rootStore } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>State Router Demo</h1>
          <Link router={rootStore.router} view={views.home}>Home</Link>
          <Link router={rootStore.router} view={views.recipes}>Recipes</Link>
        </header>
        <StateRouter router={rootStore.router} />
      </div>
    );
  }
}

export default inject('rootStore')(observer(App));
