import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Thread from './thread.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Thread />, document.getElementById('root'));
registerServiceWorker();
