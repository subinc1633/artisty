class Item < ApplicationRecord
    validates :shop_id, :category_id, presence: true
    validates :title, :price, :fav_count, presence: true
    validates :favorite, inclusion: { in: [true, false]}

    has_many_attached :photos
    has_many :reviews
    has_many :cart_items
    belongs_to :shop
    belongs_to :category
end
