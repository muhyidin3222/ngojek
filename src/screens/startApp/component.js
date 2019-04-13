import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const Touchable = (props) => {
    console.log('tes')
    return (
        <TouchableOpacity style={{
            height: 50,
            width: '100%',
            backgroundColor: props.backgroundColor ? "#16b505" : "#8e8f91",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontWeight: '500',
                fontSize: 16,
                color: 'white'
            }}>LANJUT</Text>
        </TouchableOpacity>
    )
}