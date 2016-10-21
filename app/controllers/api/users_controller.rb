class Api::UsersController < ApplicationController
  def create
    user = User.new(user_param)
    if user.save
      login(user)
      redirect_to api_user_url(user)
    else
      render user.errors.full_messages
    end
  end

  def show
    id = params[:id]
    if id.to_i == 0 && id.is_a?(String)
      @user = User.find_by_user_name(id)
      if @user
        render partial: "target_user_show"
      else
        raise "User Does Not Exist - Users Controller"
      end
    else
      @user = User.find_by_id(id)
      render :show
    end
  end

  def search
    userNameQuery = user_search_params
    searchResults = User.find_users_search(userNameQuery);
    render json: searchResults.to_json
  end

  private
  def user_param
    params.permit(:email,:user_name, :password)
  end

  def user_search_params
    params.require(:user_query)
  end
end
