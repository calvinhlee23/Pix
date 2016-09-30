json.array! @images do |img|
  json.id img.id
  json.user img.user
  json.cloud_url img.cloud_url
  json.created_at img.created_at
  json.likes img.likes.length
  json.comments img.comments
end
