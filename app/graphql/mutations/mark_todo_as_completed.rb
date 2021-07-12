module Mutations
  class MarkTodoAsCompleted < BaseMutation
    argument :todo_id, type: ID, required: true

    field :todo, Types::TodoType, null: false

    def resolve(todo_id:)
      todo = Todo.find(todo_id)

      todo.update(completed_at: Time.now)

      {
        todo: todo
      }
    end
  end
end
