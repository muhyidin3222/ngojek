import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ElevatedView from 'react-native-elevated-view'
import { help } from '../assets/startApp'

const Header = (props) => {
    return (
        <ElevatedView
            style={styles.elevatedView}
            elevation={5}>
            <Text style={styles.text}>{props.children}</Text>
        </ElevatedView>
    )
}
const HeaderAppStart = () => {
    const panah = '<='
    return (
        <View style={styles.headerAppStart}>
            <Text>{panah}</Text>
            <Image style={{ width: 20, height: 20 }} source={help} />
        </View>
    )
}

const HeaderChangeAccount = (props) => {
    return (
        <ElevatedView
            style={styles.ChangeAccount}
            elevation={5}>
            <View>
                {/* <View> <Text>back</Text></View> */}
                <Text style={styles.text}>{props.children}</Text>
            </View>
            <TouchableOpacity onPress={props.onPress} style={{
                width: 80,
                height: 35,
                backgroundColor: props.backgroundColor,
                margin: 10,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{ color: '#ffffff' }}>SIMPAN</Text>
            </TouchableOpacity>
        </ElevatedView>
    )
}

const styles = StyleSheet.create({
    elevatedView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 15
    },
    text: {
        fontWeight: "500",
        fontSize: 20
    },
    headerAppStart: {
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30
    },
    ChangeAccount: {
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e2e2e2'
    },
    touchableOpacity: {
        width: 80,
        height: 35,
        backgroundColor: "green",
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})


export { Header, HeaderAppStart, HeaderChangeAccount };