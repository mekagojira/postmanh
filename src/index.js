import React from 'react';
import ReactDOM from 'react-dom';
import './themes/index.scss';

import * as serviceWorker from './serviceWorker';
import MainContainer from './containers/main/components/MainContainer';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainContainer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
