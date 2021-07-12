module Types
  class CreateTodoErrorsType < Types::BaseObject
    field :name, String, null: true
    field :priority, String, null: true
  end
end
