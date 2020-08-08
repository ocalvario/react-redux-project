class CreateGadgets < ActiveRecord::Migration[6.0]
  def change
    create_table :gadgets do |t|
      t.integer :cat_id
      t.string :name
      t.string :description
      t.string :link

      t.timestamps
    end
  end
end
