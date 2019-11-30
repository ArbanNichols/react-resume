import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Loading from './components/common/Loading';
const Intro = lazy(() => import('./layout/Intro'));
const Resume = lazy(() => import('./layout/Resume'));

import '../scss/base.scss';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
