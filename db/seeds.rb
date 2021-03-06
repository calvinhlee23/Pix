# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = User.create(email: "calvinhlee23@gmail.com", user_name: "Calvinni",
                password: "password")

guest = User.create(email: "guest@guest.com", user_name: "Guest", password: "guest_password")
img1 = Image.create(user_id: 1, cloud_url: "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1477443118/cioax7bqmtdualwqowfr.jpg")
img1 = Image.create(user_id: 1, cloud_url: "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1477443126/yks7te7sw1dm6xulux7k.jpg")
img1 = Image.create(user_id: 1, cloud_url: "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/ayzf3isfatw7dyhh2ide.jpg")
comment1 = Comment.create(
  author_name: User.first.user_name,
  author_id: 1, image_id: img1.id,
  body: "hello this is the first comment")
like1 = Like.create(author_id: 2, image_id: img1.id)
like2 = Like.create(author_id: 1, image_id: img1.id)

# create users
50.times do
  User.create(email: Faker::Internet.email, user_name:
              Faker::Name.name, password: "password")
end

# create follows
1000.times do
  follower = User.find(Random.rand(User.all.length)+1)
  toFollow = User.find(Random.rand(User.all.length)+1)
  Follow.create(user_id: follower.id, following_user_id: toFollow.id)
end

#create images
100.times do
  imgLinks = [
              # actualphotos
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/u201ywuumn53c4h6xczu.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/esat9pzosseqhwogzrxq.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/fmtkjuerpnwrlxavpj4r.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/wvkbivieoqjjkasryout.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/mccladadyiumz1ubbgzb.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/m3tr4faovoamtuyi5ix6.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/wftmrv6q8sgijfjujtmq.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/mlggdl74y5v2egxcj4pg.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/entobfvtputnk0rc0awn.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/amytmlkazbbvshufl92u.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/zpbiylsdtvlao4ywonwi.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/ff9s2o6oaqsahqqwb8yo.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/vvwlu4bolhxdgpgujuks.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/qj72upksxepv0c5j6zrc.jpg",
              "http://res.cloudinary.com/dxgn2rpkt/image/upload/v1478113884/mb4akikky4flrazsniyv.jpg"
             ]
  imgLink = imgLinks[Random.rand(imgLinks.length)]
  poster = User.find(Random.rand(User.all.length)+1)
  Image.create(user_id: poster.id, cloud_url: imgLink)
end

#create comments
1000.times do
  userId = Random.rand(User.all.length)+1
  author = User.find(userId)
  imageId = Random.rand(299) +1
  sentenceLength = Random.rand(6)+ 5
  comment = Comment.create(author_name: author.user_name,
                            author_id: author.id, image_id: imageId,
                            body: Faker::Hipster.sentence(sentenceLength, true, sentenceLength))
end

# create likes
1000.times do
  userId = Random.rand(User.all.length)+1
  imgId = Random.rand(Image.all.length)+1
  Like.create(author_id: userId, image_id: imgId)
end
