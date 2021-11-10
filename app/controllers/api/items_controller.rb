class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
    render :index
  end
  
  def show
    @item = Item.with_attached_photos.find(params[:id])
    render :show
  end

  private
  def item_params
    params.require(:item).permit(:photos)
  end
end
