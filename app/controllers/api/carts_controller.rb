class Api::CartsController < ApplicationController
    def show
        @cart = current_cart
        render 'api/carts/show'
    end
end