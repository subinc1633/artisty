class Api::ItemsController < ApplicationController
  def show
    @item = Item.with_attached_photos.find(params[:id])
    @reviews = @item.reviews
    render :show
  end

  private
  def item_params
    params.require(:item).permit(:photos)
  end
end
