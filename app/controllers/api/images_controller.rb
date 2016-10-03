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
      @images = Image.where(user_id: get_current_user.id);
    elsif id == "followingImages"
      @images = get_current_user.followers_images
    elsif id == "publicImages"
      @images = Image.find_by_sql("
                  SELECT DISTINCT *
                  FROM images INNER JOIN users
                  ON images.user_id = users.id
                  WHERE users.public = true
                ")
    else
      @images = [Image.find_by_id(params[:id])]
    end
    render partial: "requestedImages"
  end

  def destroy
    if self.user == get_current_user

    else
      raise "Youre not permitted to delete this photo"
    end
  end

  private

  def image_params
    params.require(:image).permit(:cloud_url, :user_id);
  end
end
