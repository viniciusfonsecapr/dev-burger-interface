import React from 'react'

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import {Login, Register, Home,Products, Cart, Admin} from '../containers'

import PrivateRoute from './private-route'
import paths from '../constants/paths'


function Routes(){
    return (
        <Router>
            <Switch>
                <Route component={Login} path={paths.Login}></Route>
                <Route component={Register} path={paths.Register}></Route>
                <PrivateRoute exact component={Home} path={paths.Home}></PrivateRoute>
                <PrivateRoute  component={Products} path={paths.Produtos}></PrivateRoute>
                <PrivateRoute  component={Cart} path={paths.Carrinho}></PrivateRoute>

                <PrivateRoute  component={Admin} path={paths.Order} isAdmin></PrivateRoute>
                <PrivateRoute  component={Admin} path={paths.Products} isAdmin></PrivateRoute>
            </Switch>
        </Router>
    )

}

export default Routes