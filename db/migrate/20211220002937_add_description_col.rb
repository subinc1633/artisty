class AddDescriptionCol < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :description, :text
    remove_column :items, :rating
  end
end
