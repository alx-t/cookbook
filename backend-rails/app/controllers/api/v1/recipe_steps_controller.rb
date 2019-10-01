module Api
  module V1
    class RecipeStepsController < ApplicationController
      before_action :set_recipe, only: %i[index show update destroy]
      before_action :set_recipe_step, only: %i[show update destroy]

      # GET /recipe_steps
      def index
        @recipe_steps = @recipe.recipe_steps.all
        render json: @recipe_steps
      end

      # GET /recipe_steps/1
      def show
        render json: @recipe_step
      end

      # POST /recipe_steps
      def create
        @recipe_step = @recipe.recipe_steps.new(recipe_step_params)

        if @recipe_step.save
          render json: @recipe_step, status: :created, location: @recipe_step
        else
          render json: @recipe_step.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /recipe_steps/1
      def update
        if @recipe_step.update(recipe_step_params)
          render json: @recipe_step
        else
          render json: @recipe_step.errors, status: :unprocessable_entity
        end
      end

      # DELETE /recipe_steps/1
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
