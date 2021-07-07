class Todo < ApplicationRecord
  validates :name,
            :priority,
            presence: true

  enum priority: {
    low: 10,
    medium: 20,
    high: 30
  }
end
