class AddIgHandleToShops < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :ig_handle, :string, null: false
  end
end
