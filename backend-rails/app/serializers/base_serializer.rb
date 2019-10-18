class BaseSerializer < ActiveModel::Serializer
  attributes :image_url

  def image_url
    "http://localhost:8000/#{object.image.url}" if object.try(:image).try(:url).present?
  end
end
