import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter } from "react-router-native";
import Routers from '../../routers/home';
import { Links, Images, ViewLink, ImageInbox } from '../../components/navBar';
import ElevatedView from 'react-native-elevated-view';
import styles from './style';

//image
import {
    IconGreenInbox, IconGreenAccount, IconGreyAccount, IconGreenBeranda,
    IconGreyBeranda, IconGreenHelp, IconGreyHelp, IconGreyInbox, IconGreenChat, IconGreyChat
} from '../../assets/navBar'

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
                    <ElevatedView
                        elevation={15}
                        style={styles.view}>
                        <Links to="/" onPress={this.changeColorBeranda.bind(this)}>
                            <ViewLink>
                                <Images source={colorBeranda ? IconGreenBeranda : IconGreyBeranda} />
                                <Text style={colorBeranda ? styles.textGreen : styles.textBlack}>Beranda</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/chat" onPress={this.changeColorChat.bind(this)}>
                            <ViewLink>
                                <Images source={colorChat ? IconGreenChat : IconGreyChat} />
                                <Text style={colorChat ? styles.textGreen : styles.textBlack}>Pesan</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/help" onPress={this.changeColorHelp.bind(this)}>
                            <ViewLink>
                                <Images source={colorHelp ? IconGreenHelp : IconGreyHelp} />
                                <Text style={colorHelp ? styles.textGreen : styles.textBlack} >Bantuan</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/indox" onPress={this.changeColorInbox.bind(this)} >
                            <ViewLink>
                                <ImageInbox source={colorIndox ? IconGreenInbox : IconGreyInbox} />
                                <Text style={colorIndox ? styles.textGreen : styles.textBlack}>Inbox</Text>
                            </ViewLink>
                        </Links>
                        <Links to="/account" onPress={this.changeColorAccount.bind(this)}>
                            <ViewLink>
                                <Images source={colorAccount ? IconGreenAccount : IconGreyAccount} />
                                <Text style={colorAccount ? styles.textGreen : styles.textBlack} >Akun</Text>
                            </ViewLink>
                        </Links>
                    </ElevatedView>
                </NativeRouter>
            </View >
        )
    }
};
