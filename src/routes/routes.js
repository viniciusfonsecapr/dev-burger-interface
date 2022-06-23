import React from 'react'

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import PrivateRoute from './private-route'
import Products from '../containers/Products'

function Routes(){
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login"></Route>
                <Route component={Register} path="/register"></Route>
                <PrivateRoute exact component={Home} path="/"></PrivateRoute>
                <PrivateRoute  component={Products} path="/produtos"></PrivateRoute>
            </Switch>
        </Router>
    )

}

export default Routes