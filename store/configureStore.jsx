import routes from '../src/routes';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import { createStore, compose} from 'redux';
import rootReducer from '../reducers';

const finalCrateStore = compose(
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState) {
  const store = finalCrateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
