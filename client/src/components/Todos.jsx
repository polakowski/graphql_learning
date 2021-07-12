import React, { Component } from 'react';
import { useQuery } from '@apollo/client';
import {
  Container,
} from '@material-ui/core';

import Todo from 'components/Todo';
import { GET_TODOS } from 'resources/queries';

export default function Todos() {
  const {
    loading,
    error,
    data,
    refetch,
  } = useQuery(GET_TODOS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { todos } = data;

  const renderTodo = (todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        fetchTodos={refetch}
      />
    );
  }

  return (
    <Container maxWidth='sm'>
      {todos.map(renderTodo)}
    </Container>
  );
}
