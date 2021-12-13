class Shop < ApplicationRecord
    validates :ig_handle, presence: true
    
    has_many :items
end
