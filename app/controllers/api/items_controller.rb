class Api::ItemsController < ApplicationController
  def show
    @item = Item.with_attached_photos.find_by(id: params[:id])
    render :show
  end

  private
  def item_params
    params.require(:item).permit(:photos)
  end
end
