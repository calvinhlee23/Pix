json.user do
  json.id @user.id
  json.public @user.public
  json.email @user.email
  json.user_name @user.user_name
  json.following @user.following_users, :user_name
end
