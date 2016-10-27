class Api::LikesController < ApplicationController
  def create
    like = Like.new(like_params)
    like.author_id = get_current_user.id
    if like.save
      render json: JSON.parse(like.to_json)
    else
      render json: like.errors.full_messages
    end
  end

  def destroy
    imgId = params[:id]
    like = Like.where(image_id: imgId).where(author_id: get_current_user.id)[0]
    if like
      like.destroy
      render json: JSON.parse(like.to_json)
    else
      raise "COULD NOT FIND SUCH A LIKE"
    end
  end

  private
  def like_params
    params.require(:like).permit(:image_id)
  end
end
