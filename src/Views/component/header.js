import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 20
    },
    text: {
        fontWeight: "500",
        fontSize: 70
    }
})

export { Header };