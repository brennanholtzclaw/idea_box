class Idea < ActiveRecord::Base
  validates :quality, inclusion: { in: %w( plausible great terrible )}
end
