class Idea < ActiveRecord::Base
  validates :quality, inclusion: { in: %w( plausible great terrible )}

  scope :newest_first, -> { order(created_at: :asc) }
end
