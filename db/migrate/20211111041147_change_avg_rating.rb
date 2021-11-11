class ChangeAvgRating < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :avg_rating
  end
end
