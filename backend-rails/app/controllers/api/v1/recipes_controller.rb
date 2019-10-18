module Api
  module V1
    class RecipesController < ApplicationController
      before_action :set_recipe, only: %i[show update destroy]

      def index
        @recipes = Recipe.all
        render json: @recipes, each_serializer: RecipeSerializer
      end

      def show
        render json: @recipe, serializer: RecipeSerializer
      end

      def create
        @recipe = Recipe.new(recipe_params)

        if @recipe.save
          render json: @recipe, status: :created, location: @recipe, serializer: RecipeSerializer
        else
          render json: @recipe.errors, status: :unprocessable_entity
        end
      end

      def update
        if @recipe.update(recipe_params)
          render json: @recipe, serializer: RecipeSerializer
        else
          render json: @recipe.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @recipe.destroy
      end

      private
        def set_recipe
          @recipe = Recipe.find(params[:id])
        end

        def recipe_params
          params.require(:recipe).permit(:title, :description, :image, :rating)
        end
    end
  end
end
