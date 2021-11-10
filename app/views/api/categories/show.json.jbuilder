json.partial! 'api/categories/category', category: @category

json.photoUrl @category.photos.map do |photo|
    json.id photo.id
    json.filename photo.filename
    json.url url_for(photo)
end

json.set! :items do
    @category.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :title, :description, :price, :options, :favorite, :fav_count
        end
    end
end