class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null: false
      t.integer :item_id, null: false
      t.integer :rating, null: false
      t.text :content, null: false
      t.boolean :upvote, default: false

      t.timestamps
    end

    add_index :reviews, [:reviewer_id, :item_id]
  end
end
