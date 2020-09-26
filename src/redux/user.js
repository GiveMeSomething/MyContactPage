import { USER } from '../shared/user';
import * as ActionTypes from './ActionTypes';

export const User = (state = USER, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            var newUser = action.payload;
            newUser.id = state.length;
            return state.concat(newUser);
        case ActionTypes.DELETE_USER:
            var target = action.payload.user;
            return {...state, user: state.filter((user) => user.id !== target.id)}
        default:
            return state;
    }
}

