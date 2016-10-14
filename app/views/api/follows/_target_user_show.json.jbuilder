json.id @user.id
json.public @user.public
json.email @user.email
json.user_name @user.user_name
json.following_users @user.following_users, :user_name
json.followers @user.followers, :user_name
