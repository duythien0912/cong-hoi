import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button
} from "react-native";
import Ins from "react-native-instagram-login";
import Cookie from "react-native-cookie";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = props => {
  const [token, settoken] = useState(null);
  const [failure, setfailure] = useState(false);
  const inputIns = useRef(null);

  const logoutIns = () => {
    Alert.alert("Logout Success", "", [{ text: "OK" }], {
      cancelable: false
    });

    Cookie.clear().then(() => {
      settoken(null);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {!token ? (
        //   <TouchableOpacity
        //     style={{
        //       borderRadius: 5,
        //       backgroundColor: "orange",
        //       height: 30,
        //       width: 100,
        //       justifyContent: "center",
        //       alignItems: "center"
        //     }}
        //     onPress={() => inputIns.current.show()}
        //   >
        //     <Text style={{ color: "white" }}>Login</Text>
        //   </TouchableOpacity>
        <>
          <Icon.Button
            name="logo-instagram"
            backgroundColor="#bd3381"
            size={25}
            onPress={() => inputIns.current.show()}
          >
            Login with Instagram
          </Icon.Button>

          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0.5, 1]}
            colors={["#bd3381", "#ee583f"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Sign in with Instagram</Text>
          </LinearGradient>
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ margin: 10 }}>token: {token}</Text>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "green",
              height: 30,
              width: 100,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => logoutIns()}
          >
            <Text style={{ color: "white" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      {failure && (
        <View>
          <Text style={{ margin: 10 }}>failure: {JSON.stringify(failure)}</Text>
        </View>
      )}

      <Ins
        ref={inputIns}
        clientId="2ce51499b0ff47dfba68019863d2ee0f"
        redirectUrl="https://key46.com"
        scopes={["public_content+follower_list"]}
        onLoginSuccess={(token: any) => settoken(token)}
        onLoginFailure={(data: any) => setfailure(data)}
        wrapperStyle={{
          borderWidth: 0
        }}
        containerStyle={{
          paddingVertical: 50,
          backgroundColor: "#fff"
        }}
      />
    </View>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  },
  buttonText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "#ffffff"
  }
});

export default LoginScreen;
