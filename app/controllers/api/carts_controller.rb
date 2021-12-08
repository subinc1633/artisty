class Api::CartsController < ApplicationController
    def show
        @cart = Cart.find(params[:id])
        render 'api/carts/show'
    end

    def create
        @cart = Cart.new(cart_params)

        if @cart.save
            render 'api/carts/show'
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end
end