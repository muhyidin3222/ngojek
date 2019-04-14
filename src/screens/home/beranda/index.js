import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import styles from './style'

export default class Beranda extends Component {
    state = {
        saldo: '0'
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 30, width: '100%', padding: 10 }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Mau ke mana hari ini?'
                        borderColor='#878787'
                    />
                </View>
                <ScrollView style={styles.backgroundGopay}>
                    <View style={styles.goPay}>
                        <View style={styles.textBackgroundSaldo}>
                            <Text style={styles.textSaldo}>Go-Pay</Text>
                            <Text style={styles.textSaldo}>Rp{this.state.saldo}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}