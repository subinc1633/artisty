class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
    redirect_to root_url
  end
  
  def show
    @item = Item.find_by(id: params[:id])
    render 'api/items/show'
  end
end
