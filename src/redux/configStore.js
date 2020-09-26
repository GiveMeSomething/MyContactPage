import { createStore, combineReducers } from 'redux';
import { User } from './user';

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            user: User
        })
    );
    return store;
};