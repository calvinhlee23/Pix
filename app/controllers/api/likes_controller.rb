class Api::LikesController < ApplicationController

  def create
    param = like_params
    param[:author_id] = get_current_user.id
    like = Like.new(param)
    if like.save
      render json: like.to_json
    else
      render json: like.errors.full_messages
    end
  end


  private
  def like_params
    params.require(:like).permit(:image_id)
  end
end
