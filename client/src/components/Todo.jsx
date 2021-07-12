import React, { Component, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import get from 'lodash.get';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import {
  green,
  indigo,
} from '@material-ui/core/colors';
import { AssignmentTurnedIn } from '@material-ui/icons';
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  Button,
} from '@material-ui/core';

import * as propTypes from 'resources/propTypes';
import { MARK_TODO_AS_COMPLETED } from 'resources/queries';

const useStyles = makeStyles({
  root: {
    marginBottom: 16,
    position: 'relative',
  },
  rootBusy: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
  completedIcon: {
    position: 'absolute',
    top: 18,
    right: 18,
    fill: green[500],
  },
  cardButton: {
    color: indigo[500],
    marginLeft: 4,
  }
});

export default function Todo(props) {
  const {
    todo,
    fetchTodos,
  } = props;

  const classes = useStyles();
  const [busy, setBusy] = useState(false);
  const [markTodoAsCompleted] = useMutation(MARK_TODO_AS_COMPLETED);

  const markAsCompleted = useCallback(async () => {
    setBusy(true);

    const response = await markTodoAsCompleted({
      variables: {
        todoId: todo.id,
      },
    });

    setBusy(false);
    fetchTodos();
  }, []);

  const rootClassName = classNames(classes.root, {
    [classes.rootBusy]: busy,
  });

  return (
    <Card className={rootClassName}>
      <CardHeader
        title={todo.name}
        subheader={`Priority: ${todo.priority}`}
      />
      <CardActions>
        <Button
          disabled={Boolean(todo.completedAt || busy)}
          size='small'
          onClick={markAsCompleted}
          className={classes.cardButton}>
          {todo.completedAt ? 'Completed' : 'Mark as completed'}
        </Button>
      </CardActions>
      {
        todo.completedAt &&
        <AssignmentTurnedIn
          className={classes.completedIcon}
        />
      }
    </Card>
  );
}

Todo.propTypes = {
  todo: propTypes.todo,
  fetchTodos: PropTypes.func.isRequired,
};
