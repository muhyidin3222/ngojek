import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../../../components/header'
import Pesan from '../../../assets/chat/pesan.png'

export default class Chat extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>Dalam proses</Header>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 80
                }}>
                    <Image
                        source={Pesan}
                        style={{ width: '70%', height: '52%' }}
                    />
                    <Text style={{ fontSize: 18, marginTop: 15, fontWeight: '500' }}>Pesan NGO-JEK, yuk!</Text>
                    <Text style={{ fontSize: 12, color: '#878787' }}>Driver kami akan dengan senang hati </Text>
                    <Text style={{ fontSize: 12, color: '#878787' }}>membantumu.</Text>
                </View>
            </View>
        )
    }
}