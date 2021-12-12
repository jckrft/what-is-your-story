class CreateResponses < ActiveRecord::Migration[6.1]
  def change
    create_table :responses do |t|
      t.text :response
      t.references :user, null: false, foreign_key: true
      t.references :topic

      t.timestamps
    end
  end
end
