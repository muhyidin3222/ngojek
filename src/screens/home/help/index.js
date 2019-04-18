import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { GoPulsa, GoBills, GoShop, GoTix, GoDeals, PayLater, MyAccount, Others, Cooperation, GoCar, GoBluebird, GoFood, GoBox, GoPay, GoPoints, GoSend, GoRide } from '../../../assets/help'
import { Header } from '../../../components/header'
import { ListHelp } from '../../../components/listHelp'
import styles from './style'

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
                    <View style={styles.search}><TextInput
                        value={text}
                        placeholder='Cari informasi di sini'
                        onChangeText={text => this.setState({ text })}
                        style={styles.inputSearch} />
                    </View>
                    <ListHelp source={GoPay} style={{ width: 34, height: 21 }}>GO-PAY</ListHelp>
                    <ListHelp source={GoPoints} style={{ width: 39, height: 18 }}>GO-POINTS</ListHelp>
                    <ListHelp source={GoSend} style={{ width: 22, height: 27 }}>GO-SEND</ListHelp>
                    <ListHelp source={GoRide} style={{ width: 31, height: 20 }}>GO-RIDE</ListHelp>
                    
                    <ListHelp source={GoCar} style={{ width: 34, height: 21 }}>GO-CAR</ListHelp>
                    <ListHelp source={GoBluebird} style={{ width: 39, height: 18 }}>GO-BLUEBIRD</ListHelp>
                    <ListHelp source={GoFood} style={{ width: 22, height: 27 }}>GO-FOOD</ListHelp>
                    <ListHelp source={GoBox} style={{ width: 31, height: 20 }}>GO-BOX</ListHelp>

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