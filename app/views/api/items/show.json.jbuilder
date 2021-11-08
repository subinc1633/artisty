json.partial! 'api/items/item', item: @item
json.photoUrl @item.photos.map do |photo|
    json.id photo.id
    json.filename photo.filename
    json.url url_for(photo)
end