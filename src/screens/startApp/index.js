import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { loginImage, flag, logoGojekFont, loading } from '../../assets/startApp';
import Facebook from '../../components/facebook';
import { Images, TouchableOpacitys, Texts, Views } from './style';

export default class LogiEndRegister extends Component {

    state = {
        loadingImage: true
    }

    Login() {
        Actions.login();
    };

    Register() {
        Actions.register();
    };

    componentDidMount() {
        this.setState({ loadingImage: false })
    }

    renderLoading() {
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
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>{
                this.state.loadingImage ?
                    < Image style={{ width: '100%', height: '100%' }} source={loading} />
                    : this.renderLoading()}
            </View>
        );
    };
};
