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
  return {
    type: SIGNUP_REQUESTING,
    username,
    nickname,
    password,
    groupname
  }
}
