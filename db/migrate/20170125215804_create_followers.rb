class CreateFollowers < ActiveRecord::Migration[5.0]
  def change
    create_table :followers do |t|
      t.integer :usser_id
      t.integer :follow_by

      t.timestamps
    end
  end
end
