class Api::V1::IdeasController < ApplicationController
  protect_from_forgery with: :null_session

  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def new
    respond_with Idea.create(idea_params)
  end

  def update
    respond_with Idea.update(params[:id], idea_params), location: nil
  end

  private
    def idea_params
      params.permit(:title, :body, :quality)
    end
end
