import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import FBSDK from 'react-native-fbsdk';

const { LoginManager, AccessToken } = FBSDK;

class Facebook extends Component {
  constructor(props) {
    super(props);

    this.loginFB = this.loginFB.bind(this);
  };

  loginFB() {
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
  };

  loginFBWithPermission() {
    const _this = this;
    LoginManager.logInWithReadPermissions(["public_profile"])
      .then(
        function (result) {
          console.log("berhasil")
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
  };

  initUser = (token1) => {
    this.setState({ loading: true });
    fetch('https://graph.facebook.com/v2.9/me?fields=id,name,email,picture{url}&access_token=' + token1) //--> parameter graph bisa diganti sesuai keinginan mengacu pada graph API Facebook
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log("percobaan")
    return (
      <View style={styles.facebook}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={this.loginFB}>
          <Text style={styles.f}>f</Text>
          <Text style={styles.textFacebook}>MASUK DENGAN FACEBOOK</Text>
        </TouchableOpacity>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  facebook: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 2
  },
  textFacebook: {
    color: '#ffffff',
    fontWeight: '400',
    paddingRight: 50
  },
  f: {
    color: '#ffffff',
    fontWeight: '500',
    paddingLeft: 15,
    fontSize: 30,
    borderRadius: 5
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
  }
});
export default Facebook;