class Item < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|

    t.string :name
    t.string :first_photo
    t.string :second_photo

    t.timestamps null: false
    end
  end
end
