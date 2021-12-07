class CartItem < ApplicationRecord
    validates :quantity, inclusion: { in: 0..10 }

    belongs_to :cart
    belongs_to :item
end
