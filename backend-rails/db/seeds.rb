recipes = [
  { title: 'Low calorie pasta', description: 'A month of low calories pasta recipe', image: 'public/seed_images/a-month-of-low-calorie-pasta-recipes-134294-2.jpg', rating: 1,},
  { title: 'Zucchini spagetti with bolognese', description: 'Zucchini spagetti with bolognese recipe', image: 'public/seed_images/zucchini-spaghetti-with-bolognese-101168-2.jpg', rating: 1 },
  { title: 'Teriyaki beef and broccoli', description: 'Teriyaki beef and broccoli recipe', image: 'public/seed_images/teriyaki-beef-and-broccoli-4b797466.jpg', rating: 1 },
  { title: 'Steak bites', description: 'Steak bites recipe', image: 'public/seed_images/steak-bites-3.jpg', rating: 1 },
  { title: 'Old fashioned soup', description: 'Old fashioned soup recipe', image: 'public/seed_images/Old-Fashioned-Soup.jpg', rating: 1 },
  { title: 'Garlic butter creamed corn chicken', description: 'Garlic butter creamed corn chicken recipe', image: 'public/seed_images/Garlic-Butter-Creamed-Corn-Chicken-1-700x1050.jpg', rating: 1 }
]

recipes.each do |recipe|
  uploader = ImageUploader.new(:store)
  file = File.new(Rails.root.join(recipe[:image]))
  uploaded_file = uploader.upload(file)
  Recipe.create!(title: recipe[:title], description: recipe[:description], image_data: uploaded_file.to_json, rating: recipe[:rating])
end

RecipeStep.create([
    { recipe_id: 1, description: "Step 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 1, description: "Step 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 1, description: "Step 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 1, description: "Step 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 2, description: "Step 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 2, description: "Step 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 2, description: "Step 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 2, description: "Step 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 2, description: "Step 5 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 3, description: "Step 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 3, description: "Step 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 3, description: "Step 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 4, description: "Step 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 4, description: "Step 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 4, description: "Step 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 4, description: "Step 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 5, description: "Step 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 5, description: "Step 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 5, description: "Step 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 5, description: "Step 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 5, description: "Step 5 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 6, description: "Step 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 6, description: "Step 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { recipe_id: 6, description: "Step 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
])
