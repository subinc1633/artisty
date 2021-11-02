class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.timestamps
    end

    add_index :shops, :name, unique: true
  end
end
