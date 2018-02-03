import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MeetupList from './MeetupList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(MeetupList, document.getElementById('root'));
registerServiceWorker();
