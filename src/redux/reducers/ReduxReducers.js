import { LOGINDATA, REGISTERDATA } from "../constants";

const initialState = {
    loginData : [],
    registerData: [],
};

const ReduxReducers = (state = initialState,action) => {
    switch (action.type) {
        case LOGINDATA : {
            return{
                ...state,
                loginData : [...state.loginData, action.payload],
            };
        }
        case REGISTERDATA: {
            return{
                ...state,
                registerData: [...state.registerData, action.payload],
            };
        }
        default: {
            return state;
        }
    }
};

export default ReduxReducers;