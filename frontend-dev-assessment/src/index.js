import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const jsx = (
    <App />
)

ReactDOM.render(jsx, document.getElementById('app'))
