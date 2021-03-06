class Api::CartItemsController < ApplicationController
    def index
        @filtered_cart_items = CartItem.where(cart_id: params[:cart_id]).all
        render 'api/cart_items/index'
    end
    
    def show
        @cart_item = CartItem.find(params[:id])
        render 'api/cart_items/show'
    end

    def create
        @cart_item = CartItem.new(cart_item_params)

        if @cart_item.save
            render 'api/cart_items/show'
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = CartItem.find(params[:id])

        if @cart_item.update(cart_item_params)
            render 'api/cart_items/show'
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render json: ['deleted'], status: 200
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:cart_id, :item_id, :quantity, :price, :option)
    end
end