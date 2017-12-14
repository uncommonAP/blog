class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :oauth_token
end
