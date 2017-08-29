import React from 'react';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Login, Register} from './containers';

export default (
  <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />

  </Route>
);

//<IndexRoute component={Home} />
