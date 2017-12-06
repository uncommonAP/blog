require 'rails_helper'
require 'json'

RSpec.describe Api::V1::ArticlesController, type: :controller do
  let!(:article_list) { create_list(:article, 10) }

  describe "articles#index" do
    it "should have a successful response" do
      get :index
      expect(response.status).to be(200)
    end

    it "should return an array of 10 articles when parsed" do
      get :index
      body = JSON.parse(response.body)
      expect(body['articles']).to be_a(Array)
      expect(body['articles'].length).to eq(10)
    end

    it "should return expected articles" do
      get :index
      body = JSON.parse(response.body)
      body['articles'].each do |article|
        expect(article_list).to include(Article.find(article['id']))
      end
    end
  end
end
