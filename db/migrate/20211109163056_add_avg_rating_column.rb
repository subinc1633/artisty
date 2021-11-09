class AddAvgRatingColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :avg_rating, :integer
  end
end
