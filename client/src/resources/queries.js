import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query {
    todos {
      id
      name
      priority
      completedAt
    }
  }
`;

export const MARK_TODO_AS_COMPLETED = gql`
  mutation MarkTodoAsCompleted($todoId: ID!) {
    markTodoAsCompleted(input: { todoId: $todoId }) {
      todo {
        id
      }
    }
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo(
    $name: String!
    $priority: String!
  ) {
    createTodo(
      input: {
        name: $name
        priority: $priority
      }
    ) {
      todo {
        id
      }
      errors {
        name
        priority
      }
    }
  }
`;
