import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductNavigator, productReducer, productSaga } from './src/Product';
import NavigatorService from './src/Services/navigator';
import { MyStatusBar } from './src/Components';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  productReducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
        <Fragment>
          <MyStatusBar />
          <ProductNavigator
            ref={ this.configureNavigator }
          />
        </Fragment>
      </Provider>
    );
  }
}
