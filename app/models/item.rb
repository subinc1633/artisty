class Item < ApplicationRecord
    validates :shop_id, :category_id, presence: true
    validates :title, :description, :price, :fav_count, presence: true
    validates :avg_rating, inclusion: { in: (1..5) }
    validates :favorite, inclusion: { in: [true, false]}

    has_many_attached :photos
    has_many :reviews, dependent: destroy
    belongs_to :shop
    belongs_to :category
end
