import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header } from '../../../components/header'

export default class Inbox extends Component {

    state = {
        text: ''
    }

    render() {
        const { text } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header>Inbox</Header>
                <ScrollView><Text>{text}</Text></ScrollView>
            </View>
        )
    }
}