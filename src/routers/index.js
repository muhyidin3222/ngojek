import React, { Component } from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux'

import Login from '../screens/startApp/login'
import StartApp from '../screens/startApp/index'
import Register from '../screens/startApp/register'
import Home from '../connect'

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="loginEndRegister" component={StartApp} hideNavBar={true} />
                    <Scene key="login" component={Login} />
                    <Scene key="register" component={Register} />
                    <Scene key="home" component={Home} hideNavBar={true} />
                </Stack>
            </Router>
        )
    }
}