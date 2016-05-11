class ChangeBackQualityDefault < ActiveRecord::Migration
  def change
    change_column_default(:ideas, :quality, "terrible")
  end
end
