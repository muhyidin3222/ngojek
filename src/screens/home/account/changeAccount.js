// import React, { Component } from 'react';
// import { View, Text, TextInput } from 'react-native';
// import { HeaderChangeAccount } from '../../../components/header'
// import { changeAccount } from './style'

// export default class ChangeAccount extends Component {
//     state = {
//         userName: 'Muhyidi',
//         email: 'muhyidin480@gmail.com',
//         number: '+623982349823942'
//     }

//     render() {
//         const { email, userName, number } = this.state
//         // console.log(userName)
//         return (
//             <View style={{ flex: 1, backgroundColor: '#e2e2e2' }}>
//                 <HeaderChangeAccount />
//                 <View style={changeAccount.form}>

//                     <View style={changeAccount.backgroundInput}>
//                         <Text style={changeAccount.fontInput}>Nama</Text>
//                         <TextInput
//                             style={changeAccount.textInput}
//                             placeholder='Nama'
//                             value={userName}
//                             onChangeText={(userName) => this.setState({ userName })}
//                         />
//                     </View>

//                     <View style={changeAccount.backgroundInput}>
//                         <Text style={changeAccount.fontInput}>Email</Text>
//                         <TextInput
//                             style={changeAccount.textInput}
//                             placeholder="nama (nama@gmail.com)"
//                             value={email}
//                             onChangeText={(email) => this.setState({ email })}
//                         />
//                     </View>

//                     <View style={changeAccount.backgroundInput}>
//                         <Text style={changeAccount.fontInput}>Nomor telepon</Text>

//                         <TextInput
//                             value={number}
//                             style={changeAccount.textInput}
//                             placeholder="No. HP (812xxxxxx)"
//                             onChangeText={(number) => this.setState({ number })}
//                         />
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBarIOS,
    PixelRatio
} from 'react-native'

const NORTH_AMERICA = ['CA', 'MX', 'US']

import CountryPicker, {
    getAllCountries
} from 'react-native-country-picker-modal'


export default class Example extends Component {

    // constructor(props) {
    //     // StatusBarIOS.setHidden(true)
    //     super(props)
    //     let userLocaleCountryCode = "US"
    //     const userCountryData = getAllCountries()
    //         .filter(country => NORTH_AMERICA.includes(country.cca2))
    //         .filter(country => country.cca2 === userLocaleCountryCode)
    //         .pop()
    //     let callingCode = null
    //     let cca2 = userLocaleCountryCode
    //     if (!cca2 || !userCountryData) {
    //         cca2 = 'US'
    //         callingCode = '1'
    //     } else {
    //         callingCode = userCountryData.callingCode
    //     }
    //     this.state = {
    //         cca2,
    //         callingCode
    //     }
    // }
    state = {
        cca2: "US",
        callingCode: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Country Picker !</Text>
                <CountryPicker
                    // countryList={NORTH_AMERICA}
                    onChange={value => {
                        this.setState({ cca2: value.cca2 })
                    }}
                    cca2={this.state.cca2}
                    showCallingCode ={true}
                    translation="eng"
                    // autoFocusFilter={true}
                    // animationType="none"
                />
                <Text style={styles.instructions}>press on the flag</Text>
                {this.state.country && (
                    <Text style={styles.data}>
                        {JSON.stringify(this.state.country, null, 2)}
                    </Text>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        fontSize: 12,
        textAlign: 'center',
        color: '#888',
        marginBottom: 5
    },
    data: {
        padding: 15,
        marginTop: 10,
        backgroundColor: '#ddd',
        borderColor: '#888',
        borderWidth: 1 / PixelRatio.get(),
        color: '#777'
    }
})