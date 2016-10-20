@images.each do |img|
   json.set! img.id do
     json.id img.id
     json.user img.user
     json.cloud_url img.cloud_url
     json.created_at time_ago_in_words(img.created_at)
     json.likes img.likes
     json.comments img.comments
   end
end
