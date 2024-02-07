import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import back from "../Images/back.png";
import { useNavigation } from "@react-navigation/native";
import { handleLoginData } from "../service/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = async () => {
    const status = await handleLoginData({ email, password });
    if (status === 200) {
      navigation.navigate("userdashboard");
    } else {
      alert("Please Enter Valid Email or Password");
    }
  };
  return (
    <View style={styles.signupContainer}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate("dashboard")}>
          <Image source={back} style={{ width: 35, height: 25 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <View>
          <Text>Enter you email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.textIput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.textIput}
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    position: "absolute",
    top: "30%",
    left: "15%",
  },
  textIput: {
    borderWidth: 1,
    width: 250,
    padding: 6,
    borderRadius: 6,
    borderColor: "gray",
    margin: 6,
  },
  login: {
    marginTop: "45%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    width: 300,
    padding: 16,
  },
  button: {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5CFF5C",
    marginTop: 10,
    borderRadius: 4,
    marginLeft: 6,
    width: 150,
  },
});

export default Login;
