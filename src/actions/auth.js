import {AuthType} from "../enum/auth";
import {me} from '../services/AuthService';

export const setLogin = user => {
    return {
        type: AuthType.setLogin,
        payload: user,
    }
}

export const initUser = () => async (dispatch,getState) => {
    const response = await me();
    const user = response.data;
    dispatch(setLogin(user));
}