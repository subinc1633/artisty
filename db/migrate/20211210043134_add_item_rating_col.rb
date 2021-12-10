class AddItemRatingCol < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :rating, :decimal
  end
end
