import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter} from "react-router-native";
import Routers from './routers';
import { Links, Images, ViewLink } from '../component/navBar'

import IconGreenAccount from '../../assets/navBar/iconGreenAccount.png';
import IconGreyAccount from '../../assets/navBar/iconGreyAccount.png';
import IconGreenBeranda from '../../assets/navBar/iconGreenHome.png';
import IconGreyBeranda from '../../assets/navBar/iconGreyHome.png';
import IconGreenHelp from '../../assets/navBar/iconGreenHelp.png';
import IconGreyHelp from '../../assets/navBar/iconGreyHelp.png';
import IconGreyInbox from '../../assets/navBar/iconGreyInbox.png';
import IconGreenInbox from '../../assets/navBar/iconGreenInbox.png';
import IconGreenChat from '../../assets/navBar/iconGreenChat.png';
import IconGreyChat from '../../assets/navBar/iconGreyChat.png';

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colorBeranda: true,
            colorHelp: false,
            colorIndox: false,
            colorChat: false,
            colorAccount: false
        }
    }

    changeColorBeranda() {
        this.setState({
            colorBeranda: true,
            colorHelp: false,
            colorIndox: false,
            colorChat: false,
            colorAccount: false
        });
    };

    changeColorHelp() {
        this.setState({
            colorBeranda: false,
            colorHelp: true,
            colorIndox: false,
            colorChat: false,
            colorAccount: false
        });
    };

    changeColorChat() {
        this.setState({
            colorBeranda: false,
            colorHelp: false,
            colorIndox: false,
            colorChat: true,
            colorAccount: false
        });
    };

    changeColorInbox() {
        this.setState({
            colorBeranda: false,
            colorHelp: false,
            colorIndox: true,
            colorChat: false,
            colorAccount: false
        });
    };

    changeColorAccount() {
        this.setState({
            colorBeranda: false,
            colorHelp: false,
            colorIndox: false,
            colorChat: false,
            colorAccount: true
        });
    };

    render() {
        var { colorAccount, colorBeranda, colorChat, colorIndox, colorHelp } = this.state
        
        return (
            <View style={styles.container}>
                <NativeRouter>
                    <Routers />
                    <View style={styles.view}>
                        <Links to="/" onPress={this.changeColorBeranda.bind(this)}>
                            <ViewLink>
                                <Images source={colorBeranda ? IconGreenBeranda : IconGreyBeranda} />
                                <Text style={colorBeranda ? styles.textGreen : styles.textBlack}>Beranda</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/pesan" onPress={this.changeColorHelp.bind(this)}>
                            <ViewLink>
                                <Images source={colorHelp ? IconGreenHelp : IconGreyHelp} />
                                <Text style={colorHelp ? styles.textGreen : styles.textBlack} >Help</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/chat" onPress={this.changeColorChat.bind(this)}>
                            <ViewLink>
                                <Images source={colorChat ? IconGreenChat : IconGreyChat} />
                                <Text style={colorChat ? styles.textGreen : styles.textBlack}>Chat</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/inbox" onPress={this.changeColorInbox.bind(this)} >
                            <ViewLink>
                                <Images source={colorIndox ? IconGreenInbox : IconGreyInbox} />
                                <Text style={colorIndox ? styles.textGreen : styles.textBlack}>Inbox</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/akun" onPress={this.changeColorAccount.bind(this)}>
                            <ViewLink>
                                <Images source={colorAccount ? IconGreenAccount : IconGreyAccount} />
                                <Text style={colorAccount ? styles.textGreen : styles.textBlack} >Akun</Text>
                            </ViewLink>
                        </Links>
                    </View>
                </NativeRouter>
            </View >
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    textGreen: {
        fontSize: 10,
        color: 'green'
    },
    textBlack: {
        fontSize: 10,
        color: '#a2a3a5'
    },
    view: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingEnd: 10,
        width: '100%',
        height: 55,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    }
});