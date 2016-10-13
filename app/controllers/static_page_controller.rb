class StaticPageController < ApplicationController
  def index
    if get_current_user
      u = JSON.parse(get_current_user.to_json)
      u.delete("password_digest")
      u.delete("session_token")
      u["following"] = get_current_user.following_users.map{|fu| fu.user_name}
      @user = u.to_json
    else
      @user = get_current_user.to_json
    end
    render :root
  end
end
