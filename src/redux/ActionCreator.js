import * as ActionTypes from './ActionTypes';

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

export const deleteUser = (user) => ({
    type: ActionTypes.DELETE_USER,
    payload: {
        user: user
    }
});

export const updateUser = (id, firstName, lastName, company, phone, note, avatar) => ({
    type: ActionTypes.UPDATE_USER,
    payload: {
        id: id,
        firstName: firstName,
        lastName: lastName,
        company: company,
        phone: phone,
        note: note,
        avatar: avatar
    }
})