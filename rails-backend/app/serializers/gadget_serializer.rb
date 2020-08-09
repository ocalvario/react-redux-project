class GadgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :link
end
