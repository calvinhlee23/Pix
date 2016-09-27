class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credential(params[:email], params[:password])
    if user
      login(user)
      redirect_to api_user_url(user)
    else
      render json: user.error.full_messages
    end

  end

  def destroy
    if logged_in?
      user = get_current_user
      logout
      render json: "goodBye #{user.user_name}"
    else
      render json: "oops you are trying to log out when youre not logged_in"
    end
  end

  private
  def session_param
    params.require(:user).permit(:email, :password)
  end
end
