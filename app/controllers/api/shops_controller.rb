class Api::ShopsController < ApplicationController
  def index
    @shops = Shop.all
    render 'api/shops/index'
  end
  
  def show
    @shop = Shop.find(params[:id])
    render 'api/shops/show'
  end
end