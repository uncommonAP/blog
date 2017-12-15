require 'rails_helper'

RSpec.describe Api::V1::Admin::ArticlesController, type: :controller do
  let!(:user_admin) { FactoryBot.create(:user) }
  let!(:user_public) { FactoryBot.create(:user) }
  let!(:create_article) { {title: Faker::Lorem.sentence(4), body: Faker::Lorem.paragraphs(4).to_s }}
  let!(:article_draft) { FactoryBot.create(:article) }
  let!(:article_published_list) { create_list(:article, 45, :published) }
  let!(:article_draft_list) { create_list(:article, 4) }

  before(:each) do
    controller.stub(:verify_admin)
  end

  describe 'articles#create' do
    xit "redirects a public user" do
      log_in_as_user_public(user_public)
      post :save_new_draft, params: { article: create_article }
      expect(response).to have_http_status(:redirect)
    end

    it "creates a new draft" do
      admin_user(user_admin)
      body = create_parser({ article: create_article })
      expect(body[:article][:title]).to eq(create_article[:title])
      expect(Article.find(body[:article][:id]).draft).to be(true)
      expect(Article.find(body[:article][:id]).published).to be(false)
    end
  end

  describe 'articles#update' do
    it "makes the necessary changes to the identified article" do
      body = patch_parser(:update, { id: article_draft[:id], article: create_article })
      expect(body[:article][:id]).to eq(article_draft[:id])
      expect(body[:article][:title]).to eq(create_article[:title])
    end
  end

  describe 'articles#publish' do
    it "publishes an existing draft" do
      log_in_as_user_admin(user_admin)
      expect(article_draft.draft).to be(true)
      body = patch_parser(:publish, {id: article_draft.id, article: article_draft})
      expect(Article.find(body[:article][:id]).draft).to be(false)
      expect(Article.find(body[:article][:id]).published).to be(true)
    end
  end

  describe 'articles#draft_index' do
    it "returns a list of all article drafts" do
      log_in_as_user_admin(user_admin)
      body = get_parsed(:draft_index)
      expect(body[:articles].length).to eq(5)
    end
  end
end
