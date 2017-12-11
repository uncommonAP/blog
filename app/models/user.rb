class User < ApplicationRecord
  validates_presence_of :provider, :uid, :name, :oauth_token, :oauth_expires_at, :picture
end
