import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductNavigator, productReducer, productSaga } from './src/Product';
import NavigatorService from './src/Services/navigator';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  productReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productSaga);

export default class App extends React.Component {
  configureNavigator = (navigatorRef) => {
    NavigatorService.setContainer(navigatorRef);
  }

  render() {
    return (
      <Provider store={ store }>
        <ProductNavigator
          ref={ this.configureNavigator }
        />
      </Provider>
    );
  }
}
