import React, { Component, useState, useCallback } from 'react';
import get from 'lodash.get';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";
import {
  Container,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Button,
  FormHelperText,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';

import { CREATE_TODO } from 'resources/queries';

const useStyles = makeStyles({
  input: {
    marginBottom: 16,
  },
});

export default function NewTodo() {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('low');
  const [errors, setErrors] = useState(null);
  const [createTodo] = useMutation(CREATE_TODO);

  const submitForm = useCallback(async () => {
    const response = await createTodo({
      variables: {
        name,
        priority,
      },
    });

    const errors = get(response, 'data.createTodo.errors');

    if (errors) {
      setErrors(errors);
    } else {
      history.push('/');
    }
  }, [name, priority]);

  return (
    <Container maxWidth='sm'>
      <Card>
        <CardContent>
          <FormGroup className={classes.input}>
            <FormControl
              error={errors && errors.name}
              required>
              <InputLabel htmlFor='name'>
                Todo description
              </InputLabel>
              <Input
                id='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {
                errors && errors.name &&
                <FormHelperText
                  id='errors[name]'>
                  {errors.name}
                </FormHelperText>
              }
            </FormControl>
          </FormGroup>
          <FormGroup className={classes.input}>
            <FormControl
              error={errors && errors.priority}
              required>
              <InputLabel htmlFor='priority'>
                Priority
              </InputLabel>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                id='priority'>
                <MenuItem value='low'>Low</MenuItem>
                <MenuItem value='medium'>Medium</MenuItem>
                <MenuItem value='high'>High</MenuItem>
              </Select>
              {
                errors && errors.priority &&
                <FormHelperText
                  id='errors[priority]'>
                  {errors.priority}
                </FormHelperText>
              }
            </FormControl>
          </FormGroup>
          <Button
            onClick={submitForm}
            variant='contained'
            color='primary'>
            Submit
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
