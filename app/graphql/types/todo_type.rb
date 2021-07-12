module Types
  class TodoType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :priority, String, null: true
    field :completed_at, GraphQL::Types::ISO8601DateTime, null: true
  end
end
