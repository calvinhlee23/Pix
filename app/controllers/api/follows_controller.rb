class Api::FollowsController < ApplicationController
  def create
    target_user = User.find_by_user_name(follow_params[:userName])
    if target_user == get_current_user
      raise "YOU CANT FOLLOW YOURSELF"
    end

    if target_user
        follow = Follow.new
        follow.user_id = get_current_user.id
        follow.following_user_id = target_user.id
        if follow.save
          @user = target_user
          render partial: "target_user_show"
        else
          raise follow.errors.full_messages
        end
    else
      raise "targetUser cannot be found - FollowsController"
    end
  end

  def destroy
    target_user = User.find_by_user_name(follow_params[:userName])
    if target_user
      Follow.delete(get_current_user.id, target_user.id)
      @user = target_user
      render partial: "target_user_show"
    else
      raise "targetUser Not Found - FollowsController"
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:userName)
  end

end
