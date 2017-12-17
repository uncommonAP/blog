class Article < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  def publish(user)
    if user.admin?
      self.update(draft: false, published: true, published_on: Time.now())
    end
  end
end
