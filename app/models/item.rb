class Item < ApplicationRecord
    validates :shop_id, :category_id, presence: true
    validates :title, :description, :image_url, :price, :fav_count, presence: true
    validates :favorite, inclusion: { in: [true, false]}

    belongs_to :shop
    belongs_to :category
end
