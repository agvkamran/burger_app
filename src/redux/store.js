import { createStore,combineReducers } from 'redux';
import filtersReducer from './reducers/filters';
import burgersReducer from './reducers/burgers';

const rootReducer = combineReducers({
    filters: filtersReducer,
    burgers: burgersReducer
});

const store = createStore(rootReducer);

window.store = store;
export default store;