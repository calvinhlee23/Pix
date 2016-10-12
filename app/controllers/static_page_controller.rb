class StaticPageController < ApplicationController
  def index
    u = JSON.parse(get_current_user.to_json)
    u.delete("password_digest")
    u.delete("session_token")
    u["following"] = get_current_user.following_users
    @user = u.to_json
    render :root
  end
end
