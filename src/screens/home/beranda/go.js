import React from 'react'
import { View } from 'react-native'
import styles from '../styleberanda/styleNgojekAplication'
import { GoPulsa, GoDeals, GoCar, GoBluebird, GoFood, GoSend, GoRide } from '../../../assets/help'
import { GoComponent } from './Component'
import { others1 } from '../../../assets/beranda'

const { container, rowLogo } = styles

class Go extends React.Component {
    render() {
        return (
            <View style={container}>
                <View style={rowLogo}>
                    <GoComponent source={GoRide} style={{ height: 25, width: 31 }}>GO-RIDE</GoComponent>
                    <GoComponent source={GoCar} style={{ height: 25, width: 39 }}>GO-CAR</GoComponent>
                    <GoComponent source={GoBluebird} style={{ height: 18, width: 40 }}>GO-BLUEBIRD</GoComponent>
                    <GoComponent source={GoFood} style={{ height: 25, width: 18 }}>GO-FOOD</GoComponent>
                </View>
                <View style={rowLogo}>
                    <GoComponent source={GoSend} style={{ height: 27, width: 25 }}>GO-SEND</GoComponent>
                    <GoComponent source={GoDeals} style={{ height: 27, width: 27 }}>GO-DEALS</GoComponent>
                    <GoComponent source={GoPulsa} style={{ height: 25, width: 23 }}>GO-PULSA</GoComponent>
                    <GoComponent source={others1} style={{ height: 25, width: 27 }} onPress={this.props.onPress}>LAINNYA</GoComponent>
                </View>
            </View>
        )
    }
}

export default Go;