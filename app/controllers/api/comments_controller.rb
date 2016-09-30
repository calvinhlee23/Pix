class Api::CommentsController < ApplicationController
  def create
    param = comment_params
    param[:author_id] = get_current_user.id
    comment = Comment.new(param)
    if comment.save
      redirect_to api_comment_url(comment)
    else
      render comment.error.full_messages
    end
  end

  def show
    @comment = Comment.find_by_id(params[:id])
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :image_id)
  end
end
