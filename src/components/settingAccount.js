import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SettingImage = (props) => {
    return (
        <TouchableOpacity style={styles.touchableOpacity}>
            <Image
                style={props.style}
                source={props.source} />
            <View style={{ flex: 1 }}>
                <View style={styles.textCode}><Text>{props.children}</Text></View>
                <View style={styles.borderCode}></View>
            </View>
        </TouchableOpacity>
    )
}

const SettingImageEnd = (props) => {
    return (
        <TouchableOpacity style={styles.touchableOpacity}>
            <Image
                style={props.style}
                source={props.source} />
            <View style={{ flex: 1 }}>
                <View style={styles.textCode}><Text>{props.children}</Text></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textCode: {
        marginTop: 27,
        marginBottom: 15
    },
    borderCode: {
        borderBottomColor: '#d8d6d6',
        elevation: 1,
        width: '100%',
        height: 1
    },
    touchableOpacity: {
        flex: 1,
        flexDirection: 'row'
    }
})
export { SettingImage, SettingImageEnd };