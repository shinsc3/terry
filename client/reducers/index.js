import { combineReducers } from 'redux';

import authenReducer from './authenReducer';

const rootReducer = combineReducers({
    authenReducer,
});

export default rootReducer;
