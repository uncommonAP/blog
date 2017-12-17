class AddPublishedDate < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :published_on, :datetime
  end
end
