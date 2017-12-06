FactoryBot.define do
  factory :article do
    title Faker::Lorem.sentence(4)
    body Faker::Lorem.paragraph(2)
  end
end
