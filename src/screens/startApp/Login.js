import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import Mobile from '../../assets/startApp/mobile.png'

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{
                        width: '90%',
                        height: 200
                    }}
                    source={Mobile} />
            </View>
        )
    }
}