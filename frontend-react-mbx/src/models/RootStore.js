import { types } from 'mobx-state-tree';
import { RouterStore } from 'mobx-state-tree-router';

import RecipeStore from './RecipeStore';

const RootStore = types
  .model('RootStore', {
    recipeStore: types.optional(RecipeStore, {}),
    router: RouterStore
  });

export default RootStore;
