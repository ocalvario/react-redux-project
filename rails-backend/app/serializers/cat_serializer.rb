class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :country
  has_many :gadgets

end
