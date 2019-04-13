import React, { Component } from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux'

import Login from '../screens/startApp//Login'
import LoginEndRegister from '../screens/startApp/LoginEndRegister'
import Register from '../screens/startApp/Register'
import Home from '../screens/home/index'

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} hideNavBar={true} />
                    <Scene key="loginEndRegister" component={LoginEndRegister} hideNavBar={true} />
                    <Scene key="login" component={Login} />
                    <Scene key="register" component={Register} />
                </Stack>
            </Router>
        )
    }
}   