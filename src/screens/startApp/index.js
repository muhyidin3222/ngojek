import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { loginImage, flag, logoGojekFont } from '../../assets/startApp';
import Facebook from '../../components/facebook'

export default class LogiEndRegister extends Component {

    Login() {
        Actions.login();
    };

    Register() {
        Actions.register();
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>
                <View style={Images.header}>
                    <Image
                        style={Images.LogoGojekStyle}
                        source={logoGojekFont} />
                    <Image
                        style={Images.flagStyle}
                        source={flag} />
                </View>
                <View style={Views.content}>
                    <Image
                        style={Images.backgroundImage}
                        source={loginImage} />
                    <View style={{ paddingTop: 30 }}>
                        <Text style={Texts.welcome}>Selamat datang di NGOJEK</Text>
                        <Text style={Texts.promosiSize}>Mau pergi, belanja, kirim baran, bayar ini itu</Text>
                        <Text style={Texts.promosiSize}>dan segalanya kebutuhan lainnya? NGO-JEKin aja! </Text>
                    </View>
                    <View style={Views.LogiEndRegister}>
                        <TouchableOpacity style={TouchableOpacitys.LogiEndRegister} onPress={this.Login.bind(this)}>
                            <Text style={Texts.register}>MASUK</Text></TouchableOpacity>
                        <TouchableOpacity style={TouchableOpacitys.LogiEndRegister} onPress={this.Register.bind(this)}>
                            <Text style={Texts.daftar}>DAFTAR</Text>
                        </TouchableOpacity>
                    </View>
                    <Facebook />
                    <View style={Views.proviso}>
                        <Text>Dengan masuk atau mendaftar, kamu menyetujui </Text>
                        <View style={Views.information}>
                            <Text style={Texts.provisions}>Ketentuan Layanan</Text>
                            <Text> dan </Text>
                            <Text style={Texts.provisions}>Kebijakan Privasi</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
};

const Views = StyleSheet.create({
    LogiEndRegister: {
        flexDirection: 'row',
        paddingTop: 30,
        justifyContent: 'space-between'
    },
    content: {
        paddingTop: 55
    },
    information: {
        flexDirection: "row"
    },
    proviso: {
        marginTop: 20
    }
});

const Texts = StyleSheet.create({
    promosiSize: {
        fontSize: 14
    },
    welcome: {
        fontSize: 25,
        fontWeight: '500',
        paddingBottom: 5
    },
    daftar: {
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: '400'
    },
    register: {
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: '400'
    },
    provisions: {
        color: 'green'
    }
});

const TouchableOpacitys = StyleSheet.create({
    LogiEndRegister: {
        width: '45%',
        height: 40,
        backgroundColor: "#51d140",
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '400',
        borderRadius: 2
    }
});

const Images = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: 200
    },
    LogoGojekStyle: {
        width: 65,
        height: 16
    },
    flagStyle: {
        width: 30,
        height: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
});