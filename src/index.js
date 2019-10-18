import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './header'
import Router from './router'
import {Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
var destination = document.querySelector('#root')

ReactDOM.render(
    <BrowserRouter>
        <div>
            {/* <Header /> */}
            <Router />
        </div>
    </BrowserRouter>

    , destination
);