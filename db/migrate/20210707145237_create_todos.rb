class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.integer :priority
      t.datetime :completed_at

      t.timestamps
    end
  end
end
