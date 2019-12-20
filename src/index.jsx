import React from 'react';
import ReactDOM from 'react-dom';

import App from './jsx/App';
import { Provider } from './jsx/components/common/context';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
