class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
    render 'api/items/index'
  end

  def show
    @item = Item.find_by(id: params[:id])
  end
end
