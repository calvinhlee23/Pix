# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = User.create(email: "calvinhlee23@gmail.com", user_name: "hello_calvin",
                password: "password")

b = User.create(email: "dylanjang92@gmail.com", user_name: "hello_friend",
                password: "eatdick")


img1 = Image.create(user_id: 1, cloud_url: "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1477443118/mednpqfwqiuwui7rk3g5.jpg")
img2 = Image.create(user_id: 1, cloud_url: "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1477443126/vtumrqdn4nlxeizn8nir.jpg")
img3 = Image.create(user_id: 1, cloud_url: "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1477443108/iltv10zk9xhwwq2t3sn0.jpg")


comment1 = Comment.create(
  author_name: User.first.user_name,
  author_id: 1, image_id: img1.id,
  body: "hello this is the first comment")
like1 = Like.create(author_id: 2, image_id: img1.id)
like2 = Like.create(author_id: 1, image_id: img1.id)
