class Api::ImagesController < ApplicationController
  def create
    param = image_params
    param[:user_id] = get_current_user.id

    @img = Image.new(param)
    if @img.save
      redirect_to api_image_url(@img)
    else
      render @img.errors.full_messages
    end
  end

  def show
    id = params[:id]
    if id == "myImages"
      @images = get_current_user.images
    elsif id == "followingImages"
      @images = get_current_user.following_users_images
    elsif id == "publicImages"
      @images = Image.publicImages
      p @images;
    elsif id == "userImages"
      targetUser = User.find_by_user_name(params[:userName])
      if targetUser
        @images = targetUser.images if (targetUser.is_public? ||
                                        targetUser.is_friends_with?(get_current_user))
      else
        raise "targetUser not found - Images Controller"
      end
    else
      @images = [Image.find_by_id(params[:id])]
    end

    unless @images.nil? || @images.empty?
      render partial: "requestedImages"
    else
      render json: {}.to_json
    end
  end

  def destroy
    id = params[:id]
    img = Image.find_by_id(id);
    if img.user == get_current_user
      img.destroy
      render json: id.to_json
    else
      raise "Youre not permitted to delete this photo"
    end
  end

  private

  def image_params
    params.require(:image).permit(:cloud_url, :user_id, :userName);
  end
end
