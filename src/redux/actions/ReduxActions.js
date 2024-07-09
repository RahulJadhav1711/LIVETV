import { LOGINDATA, REGISTERDATA } from "../constants";

export const setLoginForm = data => ({
    type: LOGINDATA,
    payload: data,
});

export const setRegisterForm = data => ({
    type: REGISTERDATA,
    payload: data,
});