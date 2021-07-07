import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_TODOS = gql`
  query {
    todos {
      id
      name
      priority
    }
  }
`;

export default function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>Todos</div>
  );
}
