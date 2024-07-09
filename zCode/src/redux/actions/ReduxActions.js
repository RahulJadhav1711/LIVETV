import {LOGINDATA} from '../constants';

export const setLoginForm = data => ({
  type: LOGINDATA,
  payload: data,
});
