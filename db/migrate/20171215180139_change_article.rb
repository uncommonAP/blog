class ChangeArticle < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :draft, :boolean, default: true
    add_column :articles, :published, :boolean, default: false
  end
end
