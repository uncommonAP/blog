require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { FactoryBot.create(:user) }

  describe 'the user object' do
    it "is a User" do
      expect(user).to be_a(User)
    end
  end

  describe 'validations' do
    it "validates the presence of every field" do
      expect(user).to validate_presence_of(:provider)
      expect(user).to validate_presence_of(:uid)
      expect(user).to validate_presence_of(:name)
      expect(user).to validate_presence_of(:oauth_token)
      expect(user).to validate_presence_of(:oauth_expires_at)
    end
  end
end
