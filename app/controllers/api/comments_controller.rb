class Api::CommentsController < ApplicationController
  def create
    param = comment_params
    param[:author_id] = get_current_user.id
    param[:author_name] = get_current_user.user_name

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

  def destroy
    id = params[:id]
    comment = Comment.find_by_id(id)
    if comment.author == get_current_user
      comment.destroy
      render json: comment.to_json
    else
      raise "youre not authorized to delete this comment"
    end
  end
  private

  def comment_params
    params.require(:comment).permit(:body, :image_id)
  end
end
