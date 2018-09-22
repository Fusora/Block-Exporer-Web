import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Accounts from '../view/Accounts';
import Transactions from '../view/Transactions';
import Peers from '../view/Peers';
import Home from '../view/Home';
import Blocks from '../view/Blocks';

class RoutedAppClass extends Component{
    render() {
        return <RoutedApp />
    }
}

const RoutedApp = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/transactions" component={Transactions}/>
        <Route path="/accounts" component={Accounts} />
        <Route path="/peers" component={Peers} />
        <Route path="/blocks" component={Blocks} />
    </Switch>
)

export default RoutedAppClass;