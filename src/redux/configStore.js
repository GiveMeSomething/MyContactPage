import { createStore, combineReducers } from 'redux';
import { User } from './user';

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            user: User
        })
        ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};