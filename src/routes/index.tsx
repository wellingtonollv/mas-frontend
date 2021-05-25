import React from 'react'
import {Switch, Route} from 'react-router-dom';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';

const Routes: React.FC = () =>{
    return <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/*" render={()=><NotFound/>}/>
        <Route />
    </Switch>;
}

export default Routes;