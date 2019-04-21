import React from 'react';
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { mobile, numberCountry } from '../../../assets/startApp';
import { Touchable } from '../component';
import styles from './style';
import { HeaderAppStart } from '../../../components/header';
import { Actions } from 'react-native-router-flux'

class Login extends React.Component {
    state = {
        NoTelp: ''
    }

    cek() {
        setTimeout(() => {
            return (Actions.home())
        }, 1000);
    }

    render() {
        return (
            <View style={styles.layout}>
                <View>
                    <HeaderAppStart />
                    <View style={styles.formLogin}>
                        <View style={{ paddingBottom: 20, right: 5 }}>
                            <Image
                                source={mobile}
                                style={styles.imageHp} />
                        </View>
                        <Text style={styles.textHeader}>
                            Silakan masuk dengan nomor HP-mu yang terdaftar
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ paddingTop: 10, paddingRight: 10 }}>
                                <View style={styles.telp}>
                                    <Image
                                        style={styles.imageNumberCountry}
                                        source={numberCountry}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.formInput}>
                                <TextInput
                                    onChangeText={(NoTelp) => this.setState({ NoTelp: NoTelp })}
                                    style={{ fontSize: 20, width: '100%' }}
                                    placeholder='Nomor Hp' />
                            </View>
                        </View>
                    </View>
                </View>
                {this.state.NoTelp.length > 10 ? <Touchable backgroundColor={true} onPress={this.cek()} /> : <Touchable />}
            </View>
        )
    }
};

export default Login;