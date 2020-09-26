import * as ActionTypes from './ActionTypes' ;

export const addUser = (firstName, lastName, company, phone, note, avatar) => ({
    type: ActionTypes.ADD_USER,
    payload: {
        firstName: firstName,
        lastName: lastName,
        company: company,
        phone: phone,
        note: note,
        avatar: avatar
    }
});

export const getUsers = (users) => ({
    type: ActionTypes.GET_USER,
    payload: users
});

export const usersFailed = (errMessage) => ({
    type: ActionTypes.USER_FAILED,
    payload: errMessage
});