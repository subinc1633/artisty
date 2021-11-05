class Api::ShopsController < ApplicationController
  def show
    @shop = Shop.find(params[:id])
    render 'api/shops/show'
  end
end
