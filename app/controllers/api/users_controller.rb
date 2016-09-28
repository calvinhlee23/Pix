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
    @user = User.find_by_id(params[:id])
    render :show
  end

  private
  def user_param
    params.permit(:email,:user_name, :password)
  end
end
