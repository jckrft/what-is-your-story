class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.text :topic
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
