import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Intro from './layout/Intro';
import Resume from './layout/Resume';
// TODO: make API for static data
import { resume } from '../js/data'; // static data

import '../scss/base.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={props => <Intro {...props} />} />
        <Route
          exact
          path="/resume"
          render={props => <Resume experiences={resume} {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
