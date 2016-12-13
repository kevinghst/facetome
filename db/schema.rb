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

ActiveRecord::Schema.define(version: 20161213165418) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "friend_id",   null: false
    t.string   "user_name",   null: false
    t.string   "friend_name", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "posts", force: :cascade do |t|
    t.text     "body",               null: false
    t.integer  "author_id",          null: false
    t.integer  "target_id",          null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["author_id"], name: "index_posts_on_author_id", using: :btree
    t.index ["target_id"], name: "index_posts_on_target_id", using: :btree
  end

  create_table "requests", force: :cascade do |t|
    t.string   "requester_username", null: false
    t.string   "requestee_username", null: false
    t.integer  "requestee_user_id",  null: false
    t.integer  "requester_user_id",  null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "firstname",               null: false
    t.string   "lastname",                null: false
    t.string   "username",                null: false
    t.string   "gender",                  null: false
    t.string   "birthday",                null: false
    t.string   "password_digest",         null: false
    t.string   "session_token",           null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "hometown"
    t.string   "occupation"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.string   "background_file_name"
    t.string   "background_content_type"
    t.integer  "background_file_size"
    t.datetime "background_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
