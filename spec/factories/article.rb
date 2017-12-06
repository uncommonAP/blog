FactoryBot.define do
  factory :article do
    title Faker::Lorem.words(4)
    body Faker::Lorem.paragraph(2)
  end
end
