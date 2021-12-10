class Api::ShopsController < ApplicationController
  def index
    @shops = Shop.all
    render 'api/shops/index'
  end
end