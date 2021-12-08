json.partial! 'api/users/user', user: @user

json.set! :cart do
    json.set! @user.cart.id do
        json.extract! @user.cart, :id, :user_id
    end
end