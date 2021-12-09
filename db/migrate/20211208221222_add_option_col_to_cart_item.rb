class AddOptionColToCartItem < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :option, :string
  end
end
