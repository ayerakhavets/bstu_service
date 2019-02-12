import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { colors } from '@my/components';
import NavigatorActions from '@my/framework';
import { ProductNavigator, productReducer, productSaga } from './Product';

// FIXME: put inside the component
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  productReducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productSaga);

class App extends Component {
  configureNavigator = (navigatorRef) => {
    NavigatorActions.setContainer(navigatorRef);
  }

  render() {
    return (
      <Provider store={ store }>
        <Fragment>
          <StatusBar backgroundColor={ colors.green } />
          <ProductNavigator ref={ this.configureNavigator } />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
