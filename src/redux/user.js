import { USER } from '../shared/user';
import * as ActionTypes from './ActionTypes';

export const User = (state = USER, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            var newUser = action.payload;
            newUser.id = state.length;
            if (newUser.company === null) {
                newUser.company = '';
            }
            if (newUser.note === null) {
                newUser.note = '';
            }
            return state.concat(newUser);
        case ActionTypes.DELETE_USER:
            var target = action.payload.user;
            return state.filter((user) => user.id !== target.id);
        case ActionTypes.UPDATE_USER:
            var updateUser = action.payload;
            if (updateUser.company === null) {
                updateUser.company = '';
            }
            if (updateUser.note === null) {
                updateUser.note = '';
            }
            return state.map((user) => {
                if (user.id === updateUser.id) {
                    user = updateUser;
                    return user;
                } else {
                    return user;
                }
            })
        default:
            return state;
    }
}

