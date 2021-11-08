json.array! @reviews.each do |review|
    json.extract! review, :id, :reviewer_id, :item_id, :rating, :content
end