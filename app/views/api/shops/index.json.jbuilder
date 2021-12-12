@shops.each do |shop|
    json.set! shop.id do
        json.partial! 'api/shops/shop', shop: shop
    end
end