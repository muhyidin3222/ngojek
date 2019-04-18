import React from 'react'
import { View, Animated, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from './Component'
import Go from './go'
import GoPay from './goPay'


var isHidden = true;
class Beranda extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(100)
        };
    }


    _toggleSubview() {
        var toValue = 500;

        if (isHidden) {
            toValue = 0;
        }

        Animated.spring(
            this.state.bounceValue,
            {
                toValue: toValue,
                velocity: 3,
                tension: 2,
                friction: 8,
            }
        ).start();
        isHidden = !isHidden;
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <GoPay onPress={() => { this._toggleSubview() }} />
                <Go />

                <Animated.View style={[styles.subView, { transform: [{ translateY: this.state.bounceValue }] }]}>
                    <TouchableOpacity onPress={() => { this._toggleSubview() }}>
                        <Text style={styles.buttonText}>Show Subview</Text>
                    </TouchableOpacity>
                    <GoPay />
                </Animated.View>
            </View >
        )
    }
}

export default Beranda;


var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        padding: 8,
    },
    buttonText: {
        fontSize: 17,
        color: "#007AFF"
    },
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#ffffff",
        height: 500,
    }
});
