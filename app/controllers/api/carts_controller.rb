class Api::CartsController < ApplicationController
    def show
        @cart = Cart.find(params[:id])
        render 'api/carts/show'
    end
end