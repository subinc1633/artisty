json.partial! 'api/items/item', item: @item

json.photoUrl @item.photos.map do |photo|
    json.id photo.id
    json.filename photo.filename
    json.url url_for(photo)
end

json.reviews @reviews.each do |review|
    json.extract! review, :id, :rating, :content, :reviewer_id, :item_id
end