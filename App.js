import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductNavigator, productReducer, productSaga } from './src/Product';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  productReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productSaga);

export default class App extends React.Component {
  mock = () => {}

  render() {
    return (
      <Provider store={ store }>
        <ProductNavigator />
      </Provider>
    );
  }
}
