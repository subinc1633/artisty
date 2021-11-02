class ChangeTypeOfPriceOnItems < ActiveRecord::Migration[5.2]
  def change
    change_column :items, :price, :decimal
    change_column :items, :avg_rating, :decimal
  end
end
