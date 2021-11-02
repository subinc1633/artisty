# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_02_030438) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_categories_on_title", unique: true
  end

  create_table "items", force: :cascade do |t|
    t.integer "shop_id", null: false
    t.integer "category_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.text "image_url", null: false
    t.decimal "price", null: false
    t.string "options"
    t.boolean "favorite", default: false, null: false
    t.integer "fav_count", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "avg_rating", null: false
    t.index ["shop_id", "category_id"], name: "index_items_on_shop_id_and_category_id"
    t.index ["title"], name: "index_items_on_title"
  end

  create_table "shops", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "ig_handle", null: false
    t.index ["name"], name: "index_shops_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "name", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["name"], name: "index_users_on_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
