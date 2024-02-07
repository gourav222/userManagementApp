import SignUp from "./components/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import UserProfile from "./components/UserProfile";
import EditUserProfile from "./components/EditUserProfile";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="userdashboard" component={UserDashboard} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="userprofile" component={UserProfile} />
        <Stack.Screen name="eidtprofile" component={EditUserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
