import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MessageList from './App2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MessageList messages = {[ {text : 'text1', color : 'red' } , {text : 'text1', color : 'blue' }  ]} />, document.getElementById('root'));
registerServiceWorker();
