class Item < ApplicationRecord
    validates :shop_id, :category_id, presence: true
    validates :title, :price, :fav_count, presence: true
    validates :favorite, inclusion: { in: [true, false]}
    validates :avg_rating, inclusion: { in: (0..5) }

    has_many_attached :photos
    has_many :reviews
    belongs_to :shop
    belongs_to :category
end
