@items.each do |item|
    json.set! item.id do
        json.partial! 'api/items/item', item: item
        json.photoUrl item.photos.map do |photo|
            json.id photo.id
            json.filename photo.filename
            json.url url_for(photo)
        end
        json.set! :reviews do
            item.reviews.each do |review|
                json.set! review.id do
                    json.extract! review, :id, :rating, :content, :reviewer_id, :item_id
                end
            end
        end
    end
end