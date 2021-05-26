import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Login } from '../pages/Login';
import {Dashboard} from '../pages/Dashboard';
import {Register} from '../pages/Register';
import { NotFound } from '../pages/NotFound';

const Routes: React.FC = () =>{
    return <Switch>
        <Route path="/" exact render={()=><Login/>}/>
        <Route path="/dashboard" exact render={()=><Dashboard/>}/>
        <Route path="/register" exact render={()=><Register/>}/>
        <Route path="/*" render={()=><NotFound/>}/>
        <Route />
    </Switch>;
}

export default Routes;