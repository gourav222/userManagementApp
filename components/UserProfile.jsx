import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import profile from "../Images/profile.png";
import { useRoute } from '@react-navigation/native';

const UserProfile = () => {
    const route = useRoute();
    const name = route.params.name;
    const email = route.params.email;
  return (
    <View style={style.container}>
      <View style={style.profile}>
        <View style={style.imgContainer}>
          <Image source={profile} style={style.img} />
        </View>
        <View style={style.imgContainer}>           
          <Text>Name:{name}</Text>
          <Text>Email:{email}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: 200,
  },
  profile: {
    borderWidth: 1,
    display: "flex",
    borderRadius: 10,
    borderColor: "gray",
    padding: 10,
  },
  img: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default UserProfile;
