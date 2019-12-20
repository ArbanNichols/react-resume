import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Loading from './components/common/Loading';
import Intro from './layout/Intro';
const Resume = lazy(() => import('./layout/Resume'));

import '../scss/base.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Suspense fallback={<Loading />}>
          <Route path="/resume" component={Resume} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
