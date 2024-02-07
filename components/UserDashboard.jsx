import React, { useEffect, useState } from "react";
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
import eye from "../Images/eye.png";
import edit from "../Images/edit.png";
import remove from "../Images/remove.png";
import { getAllUserData } from "../service/UserService";
import { useNavigation } from "@react-navigation/native";
import UserProfile from "./UserProfile";
import { deleteUser } from "../service/UserService";
const UserCard = ({ name, email, id, setUserData }) => {
  const navigation = useNavigation();
  const handleDeleteUser = async () => {
    const status = await deleteUser(id);
    const newUserList = await getAllUserData();
    setUserData(newUserList);
    if (status === 201) {
      alert("User Deleted Successfully");
    }
  };
  return (
    <View style={styles.userCard}>
      <Image source={profile} style={styles.icons} />
      <Text>{name}</Text>
      <View style={styles.features}>
        <TouchableOpacity
          onPress={() => navigation.navigate("userprofile", { name, email })}
        >
          <Image source={eye} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("eidtprofile", { id })}
        >
          <Image source={edit} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteUser()}>
          <Image source={remove} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const UserDashboard = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const response = await getAllUserData();
      setUserData(response);
    }
    getUsers();
  }, []);
  return (
    <View style={styles.userContainer}>
      <View style={styles.header}>
        <Text>View All User's here</Text>
      </View>
      <View style={styles.userDetails}>
        <ScrollView>
          {userData.map((user) => (
            <UserCard
              key={user._id}
              name={user.fullName}
              email={user.email}
              id={user._id}
              setUserData={setUserData}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    width: "100%",
  },
  header: {
    backgroundColor: "#5CFF5C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 6,
    width: "100%",
  },
  icons: {
    width: 30,
    height: 30,
  },
  userCard: {
    width: 350,
    display: "flex",
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 16,
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    width: 140,
    flexDirection: "row",
  },
  userDetails: {
    marginTop: 40,
    borderWidth: 1,
    width: 360,
    borderRadius: 6,
    borderColor: "gray",
    marginBottom: 40,
    padding: 2,
  },
});
export default UserDashboard;
