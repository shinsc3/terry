import * as types from '../actions/actionTypes';
//import update from 'react-addons-update'; 이것을 사용하지 않는다 나는.

const initialState = {
    register: {
      status: 'INIT',
      error: -1
    }
};

export default function authentication(state, action) {

    if(typeof state === "undefined") state = initialState;

    switch(action.type) {
        case types.SIGNUP_REQUESTING:
            return Object.assign({}, state, {
                register: {
                    status: 'WAITING',
                    error: -1
                }
            });

        case types.SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                register: {
                    status: 'SUCCESS'
                }
            });

        case types.SIGNUP_FAILURE:
            return Object.assign({}, state, {
                register: {
                    status: 'FAILURE',
                    error: action.error
                }
            });

        default:
            return state;
    }
}
