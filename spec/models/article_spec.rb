require 'rails_helper'

RSpec.describe Article, type: :model do
  let(:article) { FactoryBot.create(:article) }

  describe 'the article object' do
    it "should be an article" do
      expect(article).to be_a(Article)
    end

    it "should contain a title" do
      expect(Article.find(article.id).title).to eq(article.title)
    end

    it "should contain a body" do
      expect(Article.find(article.id).body).to eq(article.body)
    end
  end

  describe 'the article model' do
    let(:invalid_title) { Article.new(body: Faker::Lorem.paragraph(3)) }
    let(:invalid_body) { Article.new(title: Faker::Lorem.words(3)) }

    it "should validate the presence of a title" do
      expect(invalid_title.valid?).to be(false)
    end

    it "should validate the presence of a body" do
      expect(invalid_body.valid?).to be(false)
    end
  end
end
