import React from 'react';
import Layout from './layout';
import Tafel from './tafel';
import Menu from './menu';
import KeukenStock from './KeukenStock';
import KeukenOrderList from './KeukenOrderList';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/layout" component={Layout} />
        <Route path="/tafel" component={Tafel} />
        <Route path="/menu" component={Menu} />
        <Route path="/keukenstock" component={KeukenStock} />
        <Route path="/keukenorderlist" component={KeukenOrderList} />
    </Switch>
)

export default Router;