import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { GoPulsa, GoBills, GoShop, GoTix, GoDeals, PayLater, MyAccount, Others, Cooperation } from '../../../assets/help'
import { Header } from '../../../components/header'
import { ListHelp } from '../../../components/listHelp'

export default class Help extends Component {

    state = {
        text: ''
    }

    render() {
        const { text } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header>Help</Header>
                <ScrollView>
                    <View style={{
                        backgroundColor: "black",
                        width: '100%',
                        padding: 7
                    }}><TextInput
                            value={text}
                            placeholder='Cari informasi di sini'
                            onChangeText={text => this.setState({ text })}
                            style={{
                                backgroundColor: "#dddddd",
                                height: 45,
                                paddingStart: 20
                            }} />
                    </View>
                    <ListHelp source={GoPulsa} style={{ width: 26, height: 29 }}>GO-PULSA</ListHelp>
                    <ListHelp source={GoBills} style={{ width: 26, height: 29 }}>GO-BILLS</ListHelp>
                    <ListHelp source={GoShop} style={{ width: 26, height: 29 }}>GO-SHOP</ListHelp>
                    <ListHelp source={GoTix} style={{ width: 35, height: 20, padding: 5 }}>GO-TIX</ListHelp>
                    <ListHelp source={GoDeals} style={{ width: 26, height: 29 }}>GO-DEALS</ListHelp>
                    <ListHelp source={PayLater} style={{ width: 26, height: 29 }}>PayLater</ListHelp>
                    <ListHelp source={MyAccount} style={{ width: 30, height: 29 }}>Akun Saya</ListHelp>
                    <ListHelp source={Others} style={{ width: 29, height: 29 }}>Lainnya</ListHelp>
                    <ListHelp source={Cooperation} style={{ width: 30, height: 20 }}>Bergabung Menjadi Mitra Kami</ListHelp>
                </ScrollView>
            </View>
        )
    }
}