import React from 'react';
import { View, Image, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import styles1 from '../styleberanda/styleHeader'
import styles2 from '../styleberanda/styleNgojekAplication'
import styles3 from '../styleberanda/styleindex'

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
            <View style={{
                flexDirection: 'row'
            }}>
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

export { Header, GoComponent, GoPayComponent };