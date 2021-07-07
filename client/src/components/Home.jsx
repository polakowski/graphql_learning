import React, { Component } from 'react';

import Todos from 'components/Todos';

export default class Home extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <Todos />
      </div>
    );
  }
}
