class DeleteImageUrlColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :image_url
  end
end
