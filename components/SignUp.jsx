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
import { useState } from "react";
import { handleSignUp } from "../service/Auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, serEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleSignUP = async () => {
    const status = await handleSignUp({ name, email, password });
    if (status === 201) {
      navigation.navigate("login");
    } else {
      alert("Please Enter Valid Details");
    }
  };
  return (
    <View style={styles.signupContainer}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate("dashboard")}>
          <Image source={back} style={{ width: 35, height: 25 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.signup}>
        <View>
          <Text>Enter your name</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.textIput}
            value={name}
            onChangeText={(e) => setName(e)}
          ></TextInput>
        </View>
        <View>
          <Text>Enter you email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.textIput}
            value={email}
            onChangeText={(text) => serEmail(text)}
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignUP({ name, email, password })}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signup: {
    marginTop: "45%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    width: 300,
    padding: 16,
  },
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textIput: {
    borderWidth: 1,
    width: 250,
    padding: 6,
    borderRadius: 6,
    borderColor: "gray",
    margin: 6,
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
  back: {
    position: "absolute",
    top: "22%",
    left: "15%",
  },
});

export default SignUp;
