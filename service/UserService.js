import axios from "axios";
export const getAllUserData = async () => {
  try {
    const response = await axios.get("http://192.168.1.4:8000/api/v1/getusers");
    return response.data.allUsers;
  } catch (err) {
    console.log("User For Registered", err);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(
      `http://192.168.1.4:8000/api/v1/getUser/${id}`
    );
    return response.data.user;
  } catch (err) {
    console.log("User Not Found", err);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(
      `http://192.168.1.4:8000/api/v1/deleteUser/${id}`
    );
    return response.status;
  } catch (err) {
    console.log("User Not Found", err);
  }
};

export const editUser = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://192.168.1.4:8000/api/v1/editUser/${id}`,
      data
    );
    return response.status;
  } catch (err) {
    console.log("User Not Found", err);
  }
};
