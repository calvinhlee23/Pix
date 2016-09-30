class Api::ImagesController < ApplicationController
  def create
    param = image_params
    param[:user_id] = get_current_user.id

    img = Image.new(param)
    if img.save
      redirect_to api_image_url(img)
    else
      render img.errors.full_messages
    end
  end

  def show
    @img = Image.find_by_id(params[:id])
    render :show
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
