import * as ActionTypes from './ActionTypes';

export const Users = (state = {
    errMessage: null, 
    users: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_USER:
            var user = action.payload;
            user.id = state.users.length;
            return {...state, users: state.users.concat(user)};

            case ActionTypes.GET_USER:
                return {...state, errMessage: null, comments: action.payload};
    
            case ActionTypes.USER_FAILED:
                return {...state, errMessage: null};
    
            default: return state;
    }
}