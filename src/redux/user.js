import { USER } from '../shared/user';
import * as ActionTypes from './ActionTypes';

export const User = (state = USER, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            var newUser = action.payload;
            newUser.id = state.length;
            return state.concat(newUser);
        default:
            return state;
    }
}