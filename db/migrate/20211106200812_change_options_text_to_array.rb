class ChangeOptionsTextToArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :options
  end
end
