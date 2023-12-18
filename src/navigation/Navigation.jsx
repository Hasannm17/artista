import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainTabNaigation from "./MainTabNaigation";
import LoginScreen from "../screens/LoginScreen";
import Signup from "../screens/Signup";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer style={{ marginBottom: 20, backgroundColor: 'black' }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Main" component={MainTabNaigation} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
