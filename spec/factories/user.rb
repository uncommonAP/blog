FactoryBot.define do
  factory :user do
    provider "facebook"
    uid Faker::Number.number(10)
    name Faker::Name.name
    oauth_token Faker::Number.number(10)
    oauth_expires_at Faker::Time.forward(2, :afternoon)
  end
end
