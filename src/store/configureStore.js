import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import showCaseReducer from '../reducers/showCase';
import formModalReducer from '../reducers/formModal';
import sectionItemReducer from '../reducers/sectionItems';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      showCaseItems: showCaseReducer,
      auth: authReducer,
      formModal: formModalReducer,
      portfolioItems: sectionItemReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
