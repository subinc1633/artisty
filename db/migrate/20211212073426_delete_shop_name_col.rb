class DeleteShopNameCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :shops, :name
  end
end
