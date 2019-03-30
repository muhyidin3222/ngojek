import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'react-router-native';

const Links = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Link
                to={props.to}
                style={styles.navItem}
                underlayColor="#d4d4d6"
                onPress={props.onPress}>{props.children}</Link>
        </View>
    )
}

const Images = (props) => {
    return (
        <Image
            style={styles.image}
            source={props.source}
        />
    )
}

const ImageInbox = (props) => {
    return (
        <Image
            style={styles.imageInbox}
            source={props.source}
        />
    )
}


const ViewLink = (props) => {
    return (
        <View style={styles.styleView}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    image: {
        width: 30,
        height: 30
    },
    imageInbox: {
        width: 32,
        height: 28
    },
    styleView: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export { Links, Images, ViewLink, ImageInbox };