json.extract! @cart, :id, :user_id

json.set! :cart_items do
    @cart.cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :cart_id, :item_id, :quantity
        end
    end
end