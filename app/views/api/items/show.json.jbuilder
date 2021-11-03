json.partial! 'api/items/item', item: @item
json.photoUrls @item.photos.map { |file| url_for(file) }