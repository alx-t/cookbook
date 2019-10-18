class Recipe < ApplicationRecord
  include ImageUploader[:image]
  
  has_many :recipe_steps

  validates :title, presence: true
  validates :description, presence: true
end
