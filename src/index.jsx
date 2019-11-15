import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './jsx/App';
import Loading from './jsx/components/common/Loading';
import { Provider } from './jsx/components/common/context';

ReactDOM.render(
  <Router>
    <React.Suspense fallback={<Loading />}>
      <Provider>
        <App />
      </Provider>
    </React.Suspense>
  </Router>,
  document.getElementById('root'),
);
