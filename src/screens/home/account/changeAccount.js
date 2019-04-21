import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { HeaderChangeAccount } from '../../../components/header'
import { changeAccount, styles } from './style'
import CountryPicker from 'react-native-country-picker-modal'
import { Actions } from 'react-native-router-flux';

export default class ChangeAccount extends Component {
    state = {
        userName: 'Muhyidi',
        email: 'muhyidin480@gmail.com',
        number: '8957898742345',
        cca2: "ID",
        callingCode: "62",
        backgroundColor: false,
        changeUserName: false,
        changeEmail: false,
        changeNumber: false
    }

    render() {
        const { email, userName, number, cca2, callingCode, backgroundColor, changeUserName, changeEmail, changeNumber } = this.state

        return (
            <View style={{ flex: 1, backgroundColor: '#e2e2e2' }}>
                <HeaderChangeAccount backgroundColor={backgroundColor ? 'green' : '#88898c'} onPress={() => Actions.changeAccount} />
                <View style={changeAccount.form}>

                    <View style={changeAccount.backgroundInput}>
                        <Text style={changeAccount.fontInput}>Nama</Text>
                        <View style={styles.setTextInput}>
                            <TextInput
                                style={changeAccount.textInput}
                                placeholder='Nama'
                                value={userName}
                                onChangeText={(userName) => this.setState({ userName, backgroundColor: true, changeUserName: true })}
                            />
                            {changeUserName ? <TouchableOpacity onPress={() => { this.setState({ userName: "" }) }}><Text style={{ fontSize: 20 }}>X</Text></TouchableOpacity> : <Text></Text>}
                        </View>
                    </View>

                    <View style={changeAccount.backgroundInput}>
                        <Text style={changeAccount.fontInput}>Email</Text>
                        <View style={styles.setTextInput}>
                            <TextInput
                                style={changeAccount.textInput}
                                placeholder="nama (nama@gmail.com)"
                                value={email}
                                onChangeText={(email) => this.setState({ email, backgroundColor: true, changeEmail: true })}
                            />
                            {changeEmail ? <TouchableOpacity onPress={() => { this.setState({ email: "" }) }}><Text style={{ fontSize: 20 }}>X</Text></TouchableOpacity> : <Text></Text>}
                        </View>
                    </View>

                    <View style={changeAccount.backgroundInput}>
                        <Text style={changeAccount.fontInput}>Nomor telepon</Text>
                        <View style={changeAccount.number}>
                            <CountryPicker
                                onChange={value => {
                                    this.setState({ cca2: value.cca2, callingCode: value.callingCode })
                                }}
                                cca2={cca2}
                                callingCode={callingCode}
                            />
                            <TextInput
                                value={`+${callingCode} ${number}`}
                                placeholder="No. HP (812xxxxxx)"
                                onChangeText={(number) => this.setState({ number, backgroundColor: true, number: true })}
                            />
                            {changeNumber ? <TouchableOpacity onPress={() => { this.setState({ number: "" }) }}><Text style={{ fontSize: 20 }}>X</Text></TouchableOpacity> : <Text></Text>}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
