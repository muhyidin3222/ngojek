import React, { Component } from "react";
import { View } from "react-native";
import { Route } from "react-router-native";

import Beranda from '../beranda';
import Account from '../account';
import Chat from '../chat';
import Indox from '../inbox';
import Pesan from '../pesan';

export default class Routers extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding:10 }}>
                <Route exact path="/" component={Beranda} />
                <Route path="/chat" component={Chat} />
                <Route path="/account" component={Account} />
                <Route path="/pesan" component={Pesan} />
                <Route path="/indox" component={Indox} />
            </View>
        )
    }
};