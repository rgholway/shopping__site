class Cart < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.string :number


      t.timestamps null: false
    end
  end
end
