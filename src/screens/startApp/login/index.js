import React from 'react';
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import { mobile, numberCountry } from '../../../assets/startApp'
import { Touchable } from '../component'
import styles from './style'

class Login extends React.Component {
    state = {
        NoTelp: ''
    }
    render() {
        return (
            <View style={styles.Layout}>
                <View>
                    <View style={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 55
                    }}>
                    </View>
                    <View style={styles.FormLogin}>
                        <View style={{
                            paddingBottom: 20,
                            right: 5
                        }}>
                            <Image
                                source={mobile}
                                style={styles.ImageHp} />
                        </View>
                        <Text style={styles.TextHeader}>
                            Silakan masuk dengan nomor HP-mu yang terdaftar
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ paddingTop: 10, paddingRight: 10 }}>
                                <View style={styles.Telp}>
                                    <Image
                                        style={{ height: 25, width: 55, top: 1, left: 2 }}
                                        source={numberCountry}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.FormInput}>
                                <TextInput
                                    onChangeText={(NoTelp) => this.setState({ NoTelp: NoTelp })}
                                    style={{ fontSize: 20, width: '100%' }}
                                    placeholder='Nomor Hp' />
                            </View>
                        </View>
                    </View>
                </View>
                {this.state.NoTelp.length > 5 ? <Touchable backgroundColor={true} /> : <Touchable />}
            </View>
        )
    }
};

export default Login;