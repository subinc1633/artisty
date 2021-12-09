class ChangePriceCol < ActiveRecord::Migration[5.2]
  def change
    change_column :cart_items, :price, :integer, null: false
  end
end
