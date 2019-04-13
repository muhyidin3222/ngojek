import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
<<<<<<< HEAD
import Mobile from '../../assets/startApp/mobile.png'
=======
import Mobile from '../../assets/mobile.png'
>>>>>>> 8fde18e5cfc18ec436fdd6ea52c78a287dc77471

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