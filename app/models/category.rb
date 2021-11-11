class Category < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    
    has_many :items
    has_one_attached :photo
end
