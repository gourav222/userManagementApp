import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.dashboard}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.dashboardBtn}
          onPress={() => navigation.navigate("signUp")}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.dashboardBtn}
          onPress={() => navigation.navigate("login")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#D4F1F4",
  },
  dashboardBtn: {
    backgroundColor: "#5CFF5C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 6,
    width: 80,
  },
  btnContainer: {
    margin: 6,
  },
});
export default Dashboard;
