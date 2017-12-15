require 'rails_helper'
require 'json'

RSpec.describe Api::V1::ArticlesController, type: :controller do
  let!(:article_list) { create_list(:article, 10) }

  describe "articles#index" do
    it "has a successful response" do
      get :index
      expect(response.status).to be(200)
    end

    it "returns an array of 10 articles when parsed" do
      body = get_parsed(:index)
      expect(body[:articles]).to be_a(Array)
      expect(body[:articles].length).to eq(10)
    end

    it "returns expected articles" do
      body = get_parsed(:index)
      body[:articles].each do |article|
        expect(article_list).to include(Article.find(article[:id]))
      end
    end

    it "only returns article title, date created and updated" do
      body = get_parsed(:index)
      body[:articles].each do |article|
        expect(article).to include(:title)
        expect(article).to include(:created)
        expect(article).to include(:updated)
        expect(article).not_to include(:body)
      end
    end
  end

  describe "articles#show" do
    it "renders the specified Article for the given id" do
      get :show, params: { id: article_list[0]['id'] }
      expect(response.status).to be(200)
    end

    it "returns expected article" do
      article_list.each do |article|
        body = get_show(article.id)
        expect(body[:article][:id]).to eq(article.id)
      end
    end

    it "returns an article with title, date created and updated, and body" do
      article_list.each do |article|
        body = get_show(article.id)
        expect(body[:article]).to include(:title)
        expect(body[:article]).to include(:created)
        expect(body[:article]).to include(:updated)
        expect(body[:article]).to include(:body)
      end
    end
  end
end
