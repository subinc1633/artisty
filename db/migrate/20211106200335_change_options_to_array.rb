class ChangeOptionsToArray < ActiveRecord::Migration[5.2]
  def change
    change_column :items, :options, :text
  end
end
