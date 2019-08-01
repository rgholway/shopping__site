class Cart < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.string :number, default: 0
      t.string :names, array: true, default: []
      t.string :descriptions, array: true, default: []
      t.string :images, array: true, default: []
      t.string :ids, array: true, default: []

      t.timestamps null: false
    end
  end
end
