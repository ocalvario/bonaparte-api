class CreateBattles < ActiveRecord::Migration[6.0]
  def change
    create_table :battles do |t|
      t.integer :year
      t.intenger :troops
      t.string :country
      t.string :opponent
      t.string :description
      t.timestamps
    end
  end
end
