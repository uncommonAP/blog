class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :created, :updated
  attributes :body if !:index?

  def index?
    true if scope == :index
  end

  def created
    object.created_at.strftime("%a, %d%b%Y")
  end

  def updated
    object.created_at.strftime("%a, %d%b%Y")
  end
end
