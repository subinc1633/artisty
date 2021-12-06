class ChangeCartValue < ActiveRecord::Migration[5.2]
  def change
    change_column :carts, :user_id, :integer, null: false
    add_index :carts, :user_id
  end
end
