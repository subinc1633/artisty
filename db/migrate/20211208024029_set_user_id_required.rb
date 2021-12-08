class SetUserIdRequired < ActiveRecord::Migration[5.2]
  def change
    change_column :carts, :user_id, :integer, null: false
  end
end
