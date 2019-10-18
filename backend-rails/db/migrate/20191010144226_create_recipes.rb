class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :description
      t.text :image_data
      t.integer :rating

      t.timestamps
    end
  end
end
