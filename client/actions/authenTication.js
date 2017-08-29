import {
    SIGNUP_REQUESTING,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from './actionTypes';

/*============================================================================
    authentication
==============================================================================*/
/* REGISTER */
///////////////////////////////////////////////////////////////

export function signupRequest ({ username, nickname, password, groupname }) {
  console.log('나는 authentication.js에 있다');
  
  return {
    type: SIGNUP_REQUESTING,
    username,
    nickname,
    password,
    groupname
  }
}
