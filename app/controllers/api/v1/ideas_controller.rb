class Api::V1::IdeasController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    respond_with Idea.all
  end
end
