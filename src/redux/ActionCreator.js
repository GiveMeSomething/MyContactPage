import * as ActionTypes from './ActionTypes' ;

export const addUser = (firstName, lastName, company, phone, note) => ({
    type: ActionTypes.ADD_USER,
    payload: {
        firstName: firstName,
        lastName: lastName,
        company: company,
        phone: phone,
        note: note
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