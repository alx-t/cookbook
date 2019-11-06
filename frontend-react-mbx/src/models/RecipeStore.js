import { types, getParent, destroy } from 'mobx-state-tree';

const Recipe = types
  .model('Recipe', {
    id: types.identifierNumber,
    title: types.string,
    description: types.string,
    image_url: types.string
  })
  .actions(self => ({
    remove() {
      getParent(getParent(self)).removeRecipe(self);
    },
    updateTitle(newTitle) {
      self.title = newTitle;
    },
    updateDescription(newDescription) {
      self.description = newDescription;
    },
    updateImageUrl(newImageUrl) {
      self.image_url = newImageUrl;
    }
  }));

const RecipeStore = types
  .model('RecipeStore', {
    recipes: types.array(Recipe)
  })
  .actions(self => ({
    removeRecipe(recipe) {
      destroy(recipe);
    },
    createRecipe() {
      self.recipes.push(Recipe.create({
        id: self.recipes
          .map(t => t.id)
          .reduce((a, b) => Math.max(a, b), 0) + 1
      }));
    },
    findById(id) {
      return self.recipes.find(t => t.id === id);
    }
  }));

export { RecipeStore as default, Recipe };
