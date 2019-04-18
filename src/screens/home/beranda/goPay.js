import React from 'react'
import { View, Image, Text, TouchableNativeFeedback } from 'react-native'
import styles from '../styleberanda/styleindex'
import { others1, others2, gopay, bayar, isiSaldo, nearby, searching1, voucher } from '../../../assets/beranda'
import { GoPayComponent } from './Component'

const {
    container,
    headerGopay,
    gopayImage,
    container2,
    containerGopay,
    gopayComponentImage,
    gopayComponentImageLainnya,
    textComponentGopay
} = styles

class Beranda extends React.Component {
    render() {
        return (

            <View style={container}>

                <View style={headerGopay}>
                    <Image
                        source={gopay}
                        style={gopayImage} />
                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 15, right: 15 }}>
                        Rp0
                        </Text>
                </View>
                <View style={container2}>
                    <GoPayComponent source={bayar}>Bayar</GoPayComponent>
                    <GoPayComponent source={nearby}>Nearby</GoPayComponent>
                    <GoPayComponent source={isiSaldo}>Isi Saldo</GoPayComponent>
                    <GoPayComponent source={others1}>Lainnya</GoPayComponent>
                </View>
            </View>
        )
    }
}

export default Beranda;