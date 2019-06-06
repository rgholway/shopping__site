class Item < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :first_photo
      t.string :second_photo
      t.string :third_photo
      t.string :fourth_photo
      t.string :fifth_photo
      t.string :sixth_photo


      t.timestamps null: false
    end
  end
end
