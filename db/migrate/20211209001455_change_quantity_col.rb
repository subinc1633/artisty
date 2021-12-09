class ChangeQuantityCol < ActiveRecord::Migration[5.2]
  def change
    change_column :cart_items, :quantity, :integer, null: false
  end
end
