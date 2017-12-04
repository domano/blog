import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/blog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blog />, document.getElementById('root'));
registerServiceWorker();
