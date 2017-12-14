require 'rails_helper'
require 'json'

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }
  let!(:user_new_object) { {provider: 'facebook', uid: Faker::Number.number(10), name: Faker::Name.name, oauth_token: Faker::Number.number(30), oauth_expires_at: Faker::Number.number(4).to_i}}

  describe "users#create" do
    it "has a successful response" do
      post :create, params: {user: user_new_object}
      expect(response.status).to be(200)
    end

    it "returns a User object when given a new user" do
      body = create_parser({user: user_new_object})
      expect(body[:user][:name]).to eq(user_new_object[:name])
    end

    it "creates a session for this new user" do
      body = create_parser({user: user_new_object})
      expect(User.find(session[:user_id]).id).to eq(body[:user][:id])
    end

    it "finds an existing user" do
      body = create_parser({ user: { uid: user.uid, name: user.name, oauth_token: user.oauth_token, oauth_expires_at: user.oauth_expires_at }})
      expect(body[:user][:id]).to eq(user.id)
    end

    it "signs in an existing user" do
      body = create_parser({ user: { uid: user.uid, name: user.name, oauth_token: user.oauth_token, oauth_expires_at: user.oauth_expires_at }})
      expect(User.find(session[:user_id]).id).to eq(body[:user][:id])
    end
  end
end
