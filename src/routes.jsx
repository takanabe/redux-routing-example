import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Parent from '../containers/Parent';
import ChildA from '../containers/ChildA.jsx';
import ChildB from '../containers/ChildB.jsx';
import GrandChildA from '../containers/GrandChildA.jsx';
import GrandChildB from '../containers/GrandChildB.jsx';
import NotFound from '../containers/NotFound.jsx';


export default (

<Route  path="/" component={Parent} >
  <IndexRoute component={ChildA} />
  <Route path="child_a" component={ChildA} />
  <Route path="/child_b/:id" component={ChildB} >
    <IndexRoute component={GrandChildA} />
    <Route path="gchild_a" component={GrandChildA} />
    <Route path="gchild_b" component={GrandChildB} />
  </Route>
  <Route path="*" component={NotFound} />
</Route>
);

