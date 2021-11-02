class AddAvgRating < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :avg_rating, :integer, null: false
  end
end
