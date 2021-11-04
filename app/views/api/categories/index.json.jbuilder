json.array! @categories.each do |category|
    json.partial! 'api/categories/category', category: category
end