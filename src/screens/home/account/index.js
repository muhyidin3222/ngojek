import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header } from '../../../components/header'
import Facebook from '../../../components/facebook'
import { CodePromo, Voucer, Help, Judgment, Language, Policy, Provisions } from '../../../assets/account'
import { SettingImage, SettingImageEnd } from '../../../components/settingAccount'
// import {} from 'native'

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
                        <TouchableOpacity><Text style={{ color: 'green' }}>UBAH</Text></TouchableOpacity>
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

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea'
    },
    Account: {
        padding: 13,
        width: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewFaceebook: {
        padding: 10,
        backgroundColor: '#ffffff',
        marginTop: 20
    },
    background: {
        backgroundColor: '#ffffff',
        flex: 1,
        marginTop: 20
    },
    out: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#ffffff',
        marginTop: 20
    }
});

const image = StyleSheet.create({
    codePromo: {
        width: 20,
        height: 24,
        margin: 20
    },
    voucer: {
        width: 23,
        height: 26,
        margin: 20
    },
    language: {
        width: 27,
        height: 20,
        margin: 20
    },
    help: {
        width: 24,
        height: 24,
        margin: 20
    },
    provisions: {
        width: 23,
        height: 24,
        margin: 20
    },
    policy: {
        width: 23,
        height: 26,
        margin: 20
    },
    judgment: {
        width: 25,
        height: 24,
        margin: 20
    }
})