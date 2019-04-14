import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Button, Image } from 'react-native';
import { numberCountry } from '../../../assets/startApp'
import styles from './style'
import { Touchable } from '../component'
import { HeaderAppStart } from '../../../components/header'

class Register extends React.Component {
    state = {
        NoTelp: ''
    }

    cek() {
        console.log('cek')
        setTimeout(() => {
            return (Actions.home())
        }, 1000);
    }

    render() {
        return (
            <View style={styles.layout}>
                <View>
                    <HeaderAppStart />
                    <View style={styles.headerForm}>
                        <Text style={styles.fontHeaderForm}>
                            Lengkapi data dirimu di bawah ini ya
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.fontRegister}>Nama Lengkap</Text>
                            <View style={styles.inputForm}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder='Cth: Name'
                                />
                            </View>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.fontRegister}>
                                Email
                            </Text>
                            <View style={styles.inputForm}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Cth: name@gmail.com"
                                />
                            </View>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.fontRegister}>
                                Nomor Hp
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ paddingTop: 10, paddingRight: 10 }}>
                                    <View style={styles.telp}>
                                        <Image
                                            style={{ height: 25, width: 55, top: 1, left: 2 }}
                                            source={numberCountry}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ width: '100%', paddingTop: 8, paddingRight: 70 }}>
                                    <View style={styles.inputForm}>
                                        <TextInput
                                            value={this.state.NoHp}
                                            style={styles.textInput}
                                            placeholder="Cth: 812808080"
                                            onChangeText={(NoHp) => this.setState({ NoTelp })}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {this.state.NoTelp.length > 10 ? <Touchable backgroundColor={true} onPress={this.cek()} /> : <Touchable />}
            </View>
        );
    }
}

export default Register