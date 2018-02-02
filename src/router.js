import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  });

  const Users = dynamic({
    app,
    models: () => [
      import('./models/users'),
    ],
    component: () => import('./routes/Users'),
  });

  return (
    <BrowserRouter basename="/dist">
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/dist/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;
