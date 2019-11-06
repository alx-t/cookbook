// import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
// import { RouterStore, startRouter } from 'mobx-state-tree-router';
import App from './components/App';
import RootStore from './models/RootStore';
import RecipeStore from './models/RecipeStore';
// import views from './views';

import { RECIPES } from './static/recipes';

const rootStore = RootStore.create({
  recipeStore: RecipeStore.create({
    recipes: RECIPES
  }),
  // router: RouterStore.create({
  //   views: views
  // })
});

// startRouter(rootStore.router);

ReactDOM.render((
  <Provider rootStore={rootStore}>
    <App />
  </Provider>
  ),
  document.getElementById('root'));
