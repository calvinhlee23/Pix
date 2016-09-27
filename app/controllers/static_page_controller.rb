class StaticPageController < ApplicationController
  def index
    @user = get_current_user.to_json
    render :root
  end
end
