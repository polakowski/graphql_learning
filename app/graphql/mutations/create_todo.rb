module Mutations
  class CreateTodo < BaseMutation
    argument :name, type: String, required: true
    argument :priority, type: String, required: true

    field :todo, Types::TodoType, null: true
    field :errors, Types::CreateTodoErrorsType, null: true

    def resolve(name:, priority:)
      todo = Todo.new(
        name: name,
        priority: priority
      )

      if todo.save
        {
          todo: todo
        }
      else
        {
          errors: todo.errors.to_h
        }
      end
    end
  end
end
