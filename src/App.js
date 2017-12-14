import React, { Component } from 'react';
import Root from './components/Root'
import store from './redux/store.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Root />
      </Provider>
    )
  }
}

export default App;
