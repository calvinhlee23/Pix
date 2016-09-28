class Api::ImagesController < ApplicationController
  def create
    render json: get_current_user
  end

  def destroy
    if self.user == get_current_user

    else
      raise "Youre not permitted to delete this photo"
    end
  end
end
