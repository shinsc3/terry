import  authenticationSaga from './authenticationsaga';

// LOAD THE SAGA
export default function* rootSaga() {
  yield [
    authenticationSaga(),
  ]
}
