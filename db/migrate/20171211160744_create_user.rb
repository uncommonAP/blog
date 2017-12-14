class CreateUser < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :name, null: false
      t.string :oauth_token, null: false
      t.string :oauth_expires_at, null: false

      t.timestamps
    end
  end
end
