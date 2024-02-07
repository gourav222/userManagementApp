import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { editUser } from "../service/UserService";

const EditUserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const route = useRoute();

  const updateUserProfile = async () => {
    const status = await editUser(route.params.id, { fullName: name, email });
    if (status === 201) {
      alert("User Updated Successfully");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.eidtProfile}>
        <View>
          <Text>Enter your new name</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.textIput}
            value={name}
            onChangeText={(e) => setName(e)}
          ></TextInput>
        </View>
        <View>
          <Text>Enter you new email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.textIput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => updateUserProfile()}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eidtProfile: {
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
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
  editBtn: {
    backgroundColor: "#5CFF5C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 6,
    margin: 20,
    width: 80,
  },
});
export default EditUserProfile;
