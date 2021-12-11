@categories.each do |category|
    json.set! category.id do 
        json.partial! 'api/categories/category', category: category
        json.set! :photo do
            json.id category.photo.id
            json.filename category.photo.filename
            json.url url_for(category.photo)
        end
        json.set! :items do
            category.items.each do |item|
                json.set! item.id do
                    json.extract! item, :id, :title, :price, :options, :shop_id, :favorite, :fav_count
                    json.photoUrl item.photos.map do |photo|
                        json.id photo.id
                        json.filename photo.filename
                        json.url url_for(photo)
                    end
                end
            end
        end
    end
end