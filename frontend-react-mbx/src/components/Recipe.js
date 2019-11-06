import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Recipe extends Component {
  render() {
    const { recipeStore } = this.props.rootStore;
    const recipe = recipeStore.findById(this.props.recipeId);
    return (
      <div className="Recipe">
        This is the Recipe page!
        <div>Id: {recipe.id}</div>
        <div>Title: <input type="text" value={recipe.title} onChange={e => recipe.updateTitle(e.target.value)} /></div>
        <div>Description: <textarea value={recipe.description} onChange={e => recipe.updateDescription(e.target.value)} /></div>
      </div>
    );
  }
}

export default inject('rootStore')(observer(Recipe));
