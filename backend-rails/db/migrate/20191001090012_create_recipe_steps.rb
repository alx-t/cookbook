class CreateRecipeSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_steps do |t|
      t.references :recipe, foreign_key: true
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
