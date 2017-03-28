import React  from 'react';
import ReactDOM from 'react-dom';
//import { App, Login } from './containers';

// Router
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Router, browserHistory } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import routes from './routes';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
    //applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById('root');
//ReactDOM.render(<App/>, rootElement);

/*
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="login" component={Login}/>
        </Route>
    </Router>, rootElement
);
*/


ReactDOM.render(
    <Provider store={store} >
      <Router history={browserHistory} routes={routes} />
    </Provider>, rootElement
);
