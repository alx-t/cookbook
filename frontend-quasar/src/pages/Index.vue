<template>
  <q-page padding>
    <h5>Recipes</h5>
    <div class='row'>
      <div v-for='recipe in recipes' v-bind:key='recipe.id' class='row'>
        <div class="q-pa-md row items-start q-gutter-md col-m-4">
          <q-card inline style="width: 300px">
            <img :src='recipe.image' style='max-height: 300px; max-width: 300px'>

            <q-card-section>
              <div class="text-h6">{{ recipe.title }}</div>
              <div class="text-subtitle2">by {{ recipe.author }}</div>
            </q-card-section>

            <q-card-section>
              {{ recipe.description }}
            </q-card-section>

            <q-card-actions>
              <router-link tag="q-btn" :to="{ name : 'Recipe', params: {id: recipe.id}}" >View</router-link>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Recipes',
  data () {
    return {
      recipes: {}
    }
  },
  created: function () {
    this.$axios
      .get('/statics/recipes.json')
      .then(response => {
        this.recipes = response.data.recipes
        console.log(this.recipes)
      })
  }
}
</script>
