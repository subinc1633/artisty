json.array! @items do |item|
    json.partial! 'api/items/item', item: item
    json.photoUrl item.photos.map do |photo|
        url_for(photo)
    end
end