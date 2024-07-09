import {LOGINDATA} from '../constants';

const initialState = {
  loginData: [],
};

const ReduxReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGINDATA: {
      return {
        ...state,
        loginData: [...state.loginData, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default ReduxReducers;
