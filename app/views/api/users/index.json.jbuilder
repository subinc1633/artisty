@users.each do |user|
    json.set! user.id do
        json.partial! 'api/users/user', user: user
        json.set! :cart do
            json.set! user.cart.id do
                json.extract! cart, :id, :cart_id, :item_id, :quantity
            end
        end
    end
end