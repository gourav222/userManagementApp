import axios from "axios";
export const handleSignUp = async ({ name, email, password }) => {
  try {
    const newUserData = {
      fullName: name,
      email: email,
      password: password,
    };
    const response = await axios.post(
      "http://192.168.1.4:3000/api/v1/registerUser",
      newUserData
    );
    console.log(response.status)
    return response.status;
  } catch (err) {
    console.log("User For Registered", err);
  }
};

export const handleLoginData = async ({ email, password }) => {
  try {
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      "http://192.168.1.4:3000/api/v1/loginUser",
      userData
    );
    console.log(response)
    return response.status;
  } catch (err) {
    console.log("User For Registered", err);
  }
}