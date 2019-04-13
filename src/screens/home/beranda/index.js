import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

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

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        paddingStart: 15
    },
    backgroundGopay: {
        width: '100%',
        height: '100%',
        padding: 13
    },
    goPay: {
        width: '100%',
        height: 150,
        backgroundColor: '#1a09b7',
        marginTop: 20,
        borderRadius: 5
    },
    textBackgroundSaldo: {
        justifyContent: 'space-between',
        backgroundColor: '#10019b',
        width: '100%',
        height: 45,
        flexDirection: 'row',
        padding: 10
    },
    textSaldo: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff'
    }
})