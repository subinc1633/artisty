class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.with_attached_photos.all
    render 'api/categories/index'
  end

  def show
    @category = Category.with_attached_photos.find_by(id: params[:id])
    render 'api/categories/show'
  end
end
