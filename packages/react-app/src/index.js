import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import './index.css';
import { routes } from './routes';

// import swRegister from './sw';

const history = createBrowserHistory();

ReactDOM.render(
    <LocaleProvider locale={ enUS }>
        <Router history={ history } routes={ routes }>
            { renderRoutes(routes) }
        </Router>
    </LocaleProvider>,
    document.getElementById('root')
);

// swRegister();