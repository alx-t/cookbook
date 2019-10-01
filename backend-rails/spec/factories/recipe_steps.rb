FactoryBot.define do
  factory :recipe_step do
    recipe { nil }
    title { "MyString" }
    description { "MyText" }
    image { "MyString" }
  end
end
