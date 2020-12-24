import {AuthType} from '../enum/auth';
const initState = {
    isLoggedIn: false,
    user: {},
};

const authReducer = (state = initState, action) => {
    switch (action.type){
        case AuthType.setLogin:
            // const data = {...state.auth};
            // data.isLoggedIn = true;
            // data.user = action.payload;
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };

        default:
            return state;
    }
}

export default authReducer;