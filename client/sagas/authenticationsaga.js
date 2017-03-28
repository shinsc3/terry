import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../actions/actionTypes';
//import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/actionTypes'

const signupUrl = '/api/account/signup';

function signupApi (username, nickname, password, groupname) {
  // call to the "fetch".  this is a "native" function for browsers
  // that's conveniently polyfilled in create-react-app if not available
  return fetch(signupUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, nickname, password, groupname }),
  })
    .then(handleApiErrors) // we'll make this in a second
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}


// This will be run when the SIGNUP_REQUESTING Action is found by the watcher
function* signupFlow (action) {
  try {
    const { username, nickname, password, groupname } = action

    // pulls "calls" to our signupApi with our email and password
    // from our dispatched signup action, and will PAUSE
    // here until the API async function, is complete!
    const response = yield call(signupApi, username, nickname, password, groupname)

    // when the above api call has completed it will "put",
    // or dispatch, an action of type SIGNUP_SUCCESS with
    // the successful response.
    yield put({ type: ActionTypes.SIGNUP_SUCCESS, response })
  } catch (error) {
    // if the api call fails, it will "put" the SIGNUP_ERROR
    // into the dispatch along with the error.
    yield put({ type: ActionTypes.SIGNUP_ERROR, error })
  }
}

// Watches for the SIGNUP_REQUESTING action type When it gets it, it will call signupFlow() WITH the action we dispatched
function* signupWatcher () {
  // takeLatest() takes the LATEST call of that action and runs it
  // if we we're to use takeEvery, it would take every single
  // one of the actions and kick off a new task to handle it
  // CONCURRENTLY!!!
  yield takeLatest(ActionTypes.SIGNUP_REQUESTING, signupFlow)
}

export default function* authenticationSaga() {
  yield fork(signupWatcher);
}

/*
 1) waits until it "sees" the SIGNUP_REQUESTING action dispatched
 2) calls the signupFlow() with the action received
 3) signupFlow() then run in a generator stepping through each call in a non-blocking SYNCHRONOUS looking style.
*/
