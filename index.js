import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import Header from './header'
import Footer from './footer'
import {Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
var destination = document.querySelector('#root')

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Router />
            <Footer />
        </div>
    </BrowserRouter>
)