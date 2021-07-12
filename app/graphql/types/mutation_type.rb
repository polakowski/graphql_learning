module Types
  class MutationType < Types::BaseObject
    field :mark_todo_as_completed, mutation: Mutations::MarkTodoAsCompleted
    field :create_todo, mutation: Mutations::CreateTodo
  end
end
