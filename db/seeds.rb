# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Article.create(title: Faker::Lorem.sentence(rand(3..7)), body: Faker::Lorem.paragraphs(rand(2..5)))
end

20.times do
  Article.create(title: Faker::Lorem.sentence(rand(2..6)), body: Faker::Lorem.paragraphs(rand(2..5)), published: true, draft: false)
end
