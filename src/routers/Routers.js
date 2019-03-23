import React, { Component } from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux'

import Login from '../Views/Login'
import LoginEndRegister from '../Views/LoginEndRegister'
import Register from '../Views/Register'
import Home from '../Views/Home/main'

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    {/* <Scene key="home" component={Home} hideNavBar={true} /> */}
                    <Scene key="loginEndRegister" component={LoginEndRegister} hideNavBar={true} />
                    <Scene key="login" component={Login} />
                    <Scene key="register" component={Register} />
                </Stack>
            </Router>
        )
    }
}