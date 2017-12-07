class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :created, :updated
  attribute :body, if: :not_index?

  def not_index?
    if scope != :index
      return true
    else
      return false
    end
  end

  def created
    object.created_at.strftime("%a, %d%b%Y")
  end

  def updated
    object.created_at.strftime("%a, %d%b%Y")
  end
end
