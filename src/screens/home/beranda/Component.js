import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Animated, TouchableNativeFeedback, ScrollView } from 'react-native';
import styles1 from '../styleberanda/styleHeader'
import styles2 from '../styleberanda/styleNgojekAplication'
import styles3 from '../styleberanda/styleindex'

import Go from './go'
import GoPay from './goPay'
import stop from '../../../assets/stop.jpg'

import { searching1, voucher } from '../../../assets/beranda'

const {
    containerLogo,
    borderLogo,
    textLogo,
} = styles2

const {
    container,
    search,
    posision,
    textSearch,
    viewVoucher
} = styles1

const Header = () => {
    return (
        <View style={container}>
            <TouchableOpacity style={{
                width: '80%',
            }}>
                <View style={search}>
                    <View style={posision}>
                        <Image
                            source={searching1}
                            style={{ height: 18, width: 18 }} />
                    </View>
                    <Text style={textSearch}>
                        Pesen kopi, yuk?
                            </Text>
                </View>
            </TouchableOpacity>
            <View style={styles1.voucher}>
                <TouchableOpacity>
                    <View style={viewVoucher}>
                        <Image
                            source={voucher}
                            style={{ height: 23, width: 21 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const GoComponent = (props) => {
    return (
        <View style={containerLogo}>
            <TouchableOpacity onPress={props.onPress} >
                <View style={borderLogo}>
                    <Image source={props.source}
                        style={props.style} />
                </View>
            </TouchableOpacity>
            <Text style={textLogo}>{props.children}</Text>
        </View>
    )
}

const GoPayComponent = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress} >
            <View style={styles3.containerGopay}>
                <Image
                    source={props.source}
                    style={styles3.gopayComponentImage} />
                <Text style={styles3.textComponentGopay}>{props.children}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const AnimationSwipeUp = (props) => {
    return (
        <Animated.View style={[styles.subView, { transform: [{ translateY: props.bounceValue }] }]}>
            <TouchableOpacity onPress={props.onPress} style={styles.touchableOpacity}>
                <Text style={styles.touchableOpacityText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.textFitur}>{props.children}</Text>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}>
                <View style={styles.viewImage} >
                    <Image source={stop} style={styles.image} />
                </View>
                <View style={styles.viewImage} >
                    <Image source={stop} style={styles.image} />
                </View>
            </ScrollView>
            {props.Component}
        </Animated.View>
    )
}

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
        color: "#007AFF",
        marginLeft: 10
    },
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#ffffff",
        height: 480
    },
    image: {
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        height: 100,
        width: '100%'
    },
    textFitur: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10,
        padding: 5
    },
    viewImage: {
        height: 150,
        width: 340,
        borderWidth: 0,
        margin: 10,
        borderRadius: 20,
        borderColor: '#ffffff',
        elevation: 3
    },
    touchableOpacity: {
        marginLeft: 10,
        padding: 5,
        marginTop: 5
    },
    touchableOpacityText: {
        fontSize: 20,
        fontWeight: '600'
    }
});


export { Header, GoComponent, GoPayComponent, AnimationSwipeUp };