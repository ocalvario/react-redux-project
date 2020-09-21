class GadgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :link, :cat_id
end
