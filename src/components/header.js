import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ElevatedView from 'react-native-elevated-view'

const Header = (props) => {
    return (
        <ElevatedView
            style={styles.elevatedView}
            elevation={5}>
            <Text style={styles.text}>{props.children}</Text>
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
    }
})

export { Header };