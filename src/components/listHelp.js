import React from 'react';
import { View, Text, Image } from 'react-native';

const ListHelp = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={props.stylePadding == null ? { padding: 15 } : props.stylePadding}>
                <Image
                    source={props.source}
                    style={props.style} /></View>
            <View style={{
                borderBottomWidth: 1, borderColor: '#dddddd',
                width: '100%', marginTop: 20
            }}><Text>{props.children}</Text></View>
        </View>
    )
}

export { ListHelp };
