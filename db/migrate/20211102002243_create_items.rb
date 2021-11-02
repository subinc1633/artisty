class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :shop_id, null: false
      t.integer :category_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.text :image_url, null: false
      t.integer :price, null: false
      t.string :options
      t.boolean :favorite, null: false, default: false
      t.integer :fav_count, null: false
      t.timestamps
    end

    add_index :items, [:shop_id, :category_id]
    add_index :items, :title
  end
end
