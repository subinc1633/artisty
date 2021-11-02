class Api::ShopsController < ApplicationController
  def show
    @shop = Shop.find_by(id: params[:id])
    render 'api/shops/show'
  end
end
