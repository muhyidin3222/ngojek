import React from 'react'
import { View } from 'react-native'
import { Header } from './Component'
import Go from './go'
import GoPay from './goPay'

class Beranda extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <GoPay />
                <Go />
            </View >
        )
    }
}

export default Beranda;