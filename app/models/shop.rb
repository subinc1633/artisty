class Shop < ApplicationRecord
    validates :name, :description, presence: true
    
    has_many :items
end
