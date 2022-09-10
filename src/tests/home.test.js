import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from '../Components/Header/Header';

const initialState = [];

const reducer = (state) => state;
const store = configureStore({
  reducer,
  preloadedState: initialState,
});

it('renders all countries', () => {
  const home = render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>,
  );

  expect(home).toMatchSnapshot();
});
