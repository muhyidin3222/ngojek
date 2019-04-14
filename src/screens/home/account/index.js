import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header } from '../../../components/header'
import Facebook from '../../../components/facebook'
import { CodePromo, Voucer, Help, Judgment, Language, Policy, Provisions } from '../../../assets/account'
import { SettingImage, SettingImageEnd } from '../../../components/settingAccount'
import { styles, image } from './style'
import { Actions } from 'react-native-router-flux'

export default class Account extends Component {
    state = {
        userName: 'muhyidin',
        email: 'muhyidin480@gmail.com',
        number: '+623982349823942'
    }

    render() {
        const { email, userName, number } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header><Text>Akun</Text></Header>
                <ScrollView style={styles.container}>
                    <View style={styles.Account}>
                        <View>
                            <Text style={{ fontWeight: "500" }}>{userName}</Text>
                            <Text style={{ fontWeight: "400" }}>{email}</Text>
                            <Text style={{ fontWeight: "400", paddingTop: 5 }}>{number}</Text>
                        </View>
                        <TouchableOpacity onPress={() => Actions.changeAccount()}><Text style={{ color: 'green' }}>UBAH</Text></TouchableOpacity>
                    </View>
                    <View style={styles.viewFaceebook}>
                        <Text>Tekan Tombol di bawah untuk tersambung ke </Text>
                        <Text>Facebook</Text>
                        <View style={styles.border}></View>
                        <Facebook />
                    </View>

                    <View style={styles.background}>
                        <SettingImage style={image.codePromo} source={CodePromo} >Masukan kode aja</SettingImage>
                        <SettingImage style={image.voucer} source={Voucer} >Voucher Saya</SettingImage>
                        <SettingImageEnd style={image.language} source={Language} >Pilihan Bahasa</SettingImageEnd>
                    </View>

                    <View style={styles.background}>
                        <SettingImage style={image.help} source={Help} >Bantuan</SettingImage>
                        <SettingImage style={image.provisions} source={Provisions} >Ketentuan Layanan</SettingImage>
                        <SettingImage style={image.policy} source={Policy} >Kebijakan Privasi</SettingImage>
                        <SettingImageEnd style={image.judgment} source={Judgment} >Beri Kami Nilai</SettingImageEnd>
                    </View>

                    <View style={styles.out}>
                        <Text style={{ color: 'red' }}>Keluar</Text>
                    </View>
                </ScrollView >

            </View>
        );
    }
}

//085711370695