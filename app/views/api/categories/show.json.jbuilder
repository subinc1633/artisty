json.partial! 'api/categories/category', category: @category
json.photoUrl @category.photos.map do |photo|
        json.id photo.id
        json.filename photo.filename
        json.url url_for(photo)
    end