class AddOptionsColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :options, :json, default: {}
  end
end
