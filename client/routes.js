import React from 'react';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Login} from './containers';

export default (
  <Route path="/" component={App}>
      <Route path="login" component={Login} />

  </Route>
);

//<IndexRoute component={Home} />
