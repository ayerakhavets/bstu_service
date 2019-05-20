import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { I18n, NavigatorActions } from '@my/framework';
import * as RNLocalize from 'react-native-localize';
import { colors } from '@my/components';
import { ProductNavigator, productReducer, productSaga } from './Product';

const AppContainer = createAppContainer(ProductNavigator);
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
  // constructor(props) {
  //   super(props);
  //   I18n.setI18nConfig(); // set initial config
  // }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    I18n.setI18nConfig();
    this.forceUpdate();
  };

  configureNavigator = (navigatorRef) => {
    NavigatorActions.setContainer(navigatorRef);
  }

  render() {
    return (
      <Provider store={ store }>
        <Fragment>
          <StatusBar backgroundColor={ colors.green } />
          <AppContainer ref={ this.configureNavigator } />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
