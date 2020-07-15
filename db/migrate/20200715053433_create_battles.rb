class CreateBattles < ActiveRecord::Migration[6.0]
  def change
    create_table :battles do |t|
      t.string :name
      t.integer :year
      t.string :country
      t.integer :troops
      t.integer :casualties
      t.string :description
      t.timestamps
    end
  end
end
