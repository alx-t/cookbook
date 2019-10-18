module Api
  module V1
    class RecipeStepsController < ApplicationController
      before_action :set_recipe, only: %i[index show update destroy]
      before_action :set_recipe_step, only: %i[show update destroy]

      def index
        @recipe_steps = @recipe.recipe_steps.all
        render json: @recipe_steps, each_serializer: RecipeStepSerializer
      end

      def show
        render json: @recipe_step, serializer: RecipeStepSerializer
      end

      def create
        @recipe_step = @recipe.recipe_steps.new(recipe_step_params)

        if @recipe_step.save
          render json: @recipe_step, status: :created, location: @recipe_step, serializer: RecipeStepSerializer
        else
          render json: @recipe_step.errors, status: :unprocessable_entity
        end
      end

      def update
        if @recipe_step.update(recipe_step_params)
          render json: @recipe_step, serializer: RecipeStepSerializer
        else
          render json: @recipe_step.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @recipe_step.destroy
      end

      private

      def set_recipe
        @recipe = Recipe.find(params[:recipe_id])
      end

      def set_recipe_step
        @recipe_step = @recipe.recipe_steps.find(params[:id])
      end

      def recipe_step_params
        params.require(:recipe_step).permit(:recipe_id, :title, :description, :image)
      end
    end
  end
end
