import { USERS } from "../shared/users";
import { InitialUser } from "./form";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';

export const configStore = () => {
    const store = createStore(
        combineReducers({
            users: USERS,
            ...createForms({
                user: InitialUser
            })
        }), applyMiddleware(thunk)
    );
    return store;
}