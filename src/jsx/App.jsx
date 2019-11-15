import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Loading from './components/common/Loading'
const Intro = lazy(() => import('./layout/Intro'));
const Resume = lazy(() => import('./layout/Resume'));

import '../scss/base.scss';

const App = () => {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Intro {...props} />} />
          <Route
            exact
            path="/resume"
            render={props => <Resume {...props} />}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
