import React from 'react';
import { Provider } from 'react-redux';

import './styles/main.scss';
import Router from './Router';

import store from '../redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
