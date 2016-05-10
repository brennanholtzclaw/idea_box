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

  end
end
