import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import FBSDK from 'react-native-fbsdk';

const { LoginButton, LoginManager, AccessToken } = FBSDK;
const fb = require('../assets/Login.png'); //--> asset gambar fb

export default class LoginFB extends Component {
  constructor(props) {
    super(props);
    
    this.loginFB = this.loginFB.bind(this);
  }
  
  loginFB () {
    AccessToken.getCurrentAccessToken()
    .then((data) => {
      if (data !== null) {
        _this.initUser(data.accessToken);
      } else {
        this.loginFBWithPermission();
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  loginFBWithPermission() {
    const _this = this;
    LoginManager.logInWithReadPermissions(["public_profile", "email", "user_photos"])
    .then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
          AccessToken.getCurrentAccessToken().then((data) => {
            _this.initUser(data.accessToken);
          }).catch(err => {
            console.log(err)
          })
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
        Alert.alert('Error', 'Login fail with error: ' + error);
      }
    )
    .catch((err) => console.log(err));
  }
  
  initUser = (token1) => {
    this.setState({ loading: true });
    fetch('https://graph.facebook.com/v2.9/me?fields=id,name,email,picture{url}&access_token=' + token1) //--> parameter graph bisa diganti sesuai keinginan mengacu pada graph API Facebook
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log(err));
  }
  
  render() {
    return(
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this.loginFB}>
          <Image
            style={{ width: (window.width / 2) - 20, height: 48 }}
            source={fb}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    )
  }
}