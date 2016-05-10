class Api::V1::IdeasController < ApplicationController
  protect_from_forgery with: :null_session

  respond_to :json

  def index
    respond_with Idea.all
  end
end
