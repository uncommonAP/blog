require 'rails_helper'

RSpec.describe Article, type: :model do
  let!(:article) { FactoryBot.create(:article) }
  let!(:user) { FactoryBot.create(:user) }

  describe 'the article object' do
    it "is an article" do
      expect(article).to be_a(Article)
    end

    it "contains a title" do
      expect(Article.find(article.id).title).to eq(article.title)
    end

    it "contains a body" do
      expect(Article.find(article.id).body).to eq(article.body)
    end

    it "is created as a draft" do
      expect(article.draft).to be(true)
      expect(article.published).to be(false)
    end
  end

  describe 'the article model' do
    let(:invalid_title) { Article.new(body: Faker::Lorem.paragraph(3)) }
    let(:invalid_body) { Article.new(title: Faker::Lorem.words(3)) }

    it "validates the presence of a title" do
      expect(invalid_title.valid?).to be(false)
    end

    it "validates the presence of a body" do
      expect(invalid_body.valid?).to be(false)
    end
  end

  describe '#publish' do
    it "updates an article from draft to published" do
      admin_user(user)
      article.publish(user)
      expect(article.draft).to be(false)
      expect(article.published).to be(true)
    end
  end
end
