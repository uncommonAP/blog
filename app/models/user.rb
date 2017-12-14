class User < ApplicationRecord
  validates_presence_of :provider, :uid, :name, :oauth_token, :oauth_expires_at

  def self.from_facebook(auth)
    user = self.new(
      provider: 'facebook',
      uid: auth['uid'],
      name: auth['name'],
      oauth_token: auth['oauth_token'],
      oauth_expires_at: Time.new + auth['oauth_expires_at'].to_i
    )
    user.save!
    return user
  end

  def admin?
    if self.uid == ENV['ADMIN_UID']
      return true
    else
      return false
    end
  end
end
