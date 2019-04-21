import React, { Component } from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux'

import Login from '../screens/startApp/login'
import StartApp from '../screens/startApp'
import Register from '../screens/startApp/register'
import Home from '../screens/home'
import ChangeAccount from '../screens/home/account/changeAccount'

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} hideNavBar={true} />
                    <Scene key="loginEndRegister" component={StartApp} hideNavBar={true} />
                    <Scene key="login" component={Login} hideNavBar={true} />
                    <Scene key="register" component={Register} hideNavBar={true} />
                    <Scene key="changeAccount" component={ChangeAccount} hideNavBar={true} />
                </Stack>
            </Router>
        )
    }
}