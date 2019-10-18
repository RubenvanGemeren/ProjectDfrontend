import React from 'react';
import Layout from './layout';
import Tafel from './tafel';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/layout" component={Layout} />
        <Route path="/tafel" component={Tafel} />
    </Switch>
)

export default Router;