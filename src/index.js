import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './Table';
import tableReducer from './TableReducer';

const store = createStore(tableReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);