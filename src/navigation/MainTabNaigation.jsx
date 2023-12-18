import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ChatsScreen from "../screens/ChatsScreen";
import LocationPage from "../screens/LocationPage";
import { FontAwesome5 } from '@expo/vector-icons';
import HomeStackNavigator from "../screens/HomeScreen";
import ProfileNavigation from "../screens/ProfileScreen";
import { Button, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const MainTabNaigation = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return focused ? (
                <AntDesign name="home" size={20} color="#9437fe" />
              ) : (
                <AntDesign name="home" size={22} color="white" />
              );

            case "Profile":
              return focused ? (
                <Ionicons name="person" size={20} color="#9437fe" />
              ) : (
                <Ionicons name="person" size={22} color="white" />
              );

              case "Chats":
                return focused ? (
                  <Ionicons name="chatbubble-ellipses-outline" size={20} color="#9437fe" />
                ) : (
                  <Ionicons name="chatbubble-ellipses-outline" size={22} color="white" />
                );

                
              case "Discover":
                return focused ? (
                  <FontAwesome5 name="safari" size={20} color="#9437fe" />
                ) : (
                  <FontAwesome5 name="safari" size={22} color="white" />
                );
          }
        },
        tabBarActiveTintColor: "#9437fe",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
         
          elevation: 100,
        
          height: 60,
          backgroundColor: "black",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          
          fontFamily: "Rubik-Medium",
          padding: 4,
          marginTop: -10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{headerShown:false}} />
      <Tab.Screen name="Discover" component={LocationPage} options={{headerShown:false}} />
      <Tab.Screen name="Chats" component={ChatsScreen}     options={{
  headerShown:true ,
  headerTitle: (props) => <Text className="text-primary text-lg" style={{fontFamily:'Rubik-Medium'}}>Chatting</Text>,
  headerRight: () => (
   <TouchableOpacity className="mr-4 flex-row justify-center items-center">
    <Feather name="search" size={24} color="white" />
   </TouchableOpacity>
  ),
  headerStyle:{
    backgroundColor:"black"
  }

        }}   />
      <Tab.Screen options={{headerShown:false}} name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>

  );
};

export default MainTabNaigation;
