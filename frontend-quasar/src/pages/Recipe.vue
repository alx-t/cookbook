<template>
  <q-page padding>
    <h4>{{ recipe.title }} - Recipe detail</h4>
    <div class='row'>
      <div class='col-md-4'>
        image
      </div>
      <div class='col-md-8'>
        <h5>{{ recipe.description }}</h5>
        <h5>by {{ recipe.author }}</h5>
        <div v-for='step in recipe.steps' v-bind:key='step.id' class='row'>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Recipe',
  data () {
    return {
      recipe: {}
    }
  },
  created: function () {
    this.$axios
      .get('/statics/recipes.json')
      .then(response => {
        this.recipe = response.data.recipes.filter(data => data.id === this.$route.params.id)[0]
        console.log(this.recipe)
      })
  }
}
</script>

<style>
</style>
