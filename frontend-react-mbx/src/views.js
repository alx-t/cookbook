import React from 'react';
import { View } from 'mobx-state-tree-router';

import Home from './components/Home';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';

const views = {
  home: View.create({
    name: 'home',
    path: '/',
    component: <Home />
  }),
  recipes: View.create({
    name: 'recipes',
    path: '/recipes',
    component: <RecipeList />
  }),
  recipe: View.create({
    name: 'recipe',
    path: '/recipes/:recipeId',
    component: <Recipe />,
    hooks: {
      beforeEnter(self, params) {
        self.router.setProps({
          recipeId: parseInt(params.recipeId)
        });
      }
    }
  })
};

export default views;
