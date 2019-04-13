import React, { Component } from "react";
import { View } from "react-native";
import { Route } from "react-router-native";

import Beranda from '../screens/home/beranda';
import Account from '../screens/home/account';
import Chat from '../screens/home/chat';
import Help from '../screens/home/help';
import Inbox from "../screens/home/inbox";

export default class Routers extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Route exact path="/" component={Beranda} />
                <Route path="/chat" component={Chat} />
                <Route path="/account" component={Account} />
                <Route path="/help" component={Help} />
                <Route path="/indox" component={Inbox} />
            </View>
        )
    }
};