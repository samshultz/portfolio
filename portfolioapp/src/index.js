import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './css/bootstrap.css'
import './css/easy-responsive-tabs.css'
import './css/font-awesome.css'
import './css/index.css'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
