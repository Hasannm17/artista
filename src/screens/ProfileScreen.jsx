import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Following from "./Following";
import Followers from "./Followers";
const Stack = createNativeStackNavigator()
const ProfileScreen = () => {

  return (
    <SafeAreaView className="bg-black flex-1">
      <Image
        blurRadius={10}
        className="h-[30%]"
        source={{
          uri: "https://images.unsplash.com/photo-1701962541409-e2c1256a8574?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />

      <View className="flex-1 flex-col  items-center bg-black white rounded-t-[40px] -mt-10 relative">
        <Image
          className="h-[100px] absolute -top-12 translate-x-1/2  w-[100px] rounded-full "
          source={{
            uri: "https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg",
          }}
        />

        <View className="w-full px-8 flex-row justify-between mt-4 ">
          <View className="flex-col items-center">
            <View className="flex-row justify-center items-center  gap-2">
              <Octicons name="person" size={18} color="white" />
              <Text
                className="text-white text-xl "
                style={{ fontFamily: "Rubik-Black" }}
              >
                3k
              </Text>
            </View>
            <Text
              className="text-secondary text-sm "
              style={{ fontFamily: "Rubik-Medium" }}
            >
              Following
            </Text>
          </View>

          <View className="flex-col items-center">
            <View className="flex-row justify-center items-center  gap-2">
              <Octicons name="person" size={18} color="white" />
              <Text
                className="text-white text-xl "
                style={{ fontFamily: "Rubik-Black" }}
              >
                10k
              </Text>
            </View>
            <Text
              className="text-secondary text-sm "
              style={{ fontFamily: "Rubik-Medium" }}
            >
              Followers
            </Text>
          </View>
        </View>

        <View className="w-full text-white mt-4 flex-col items-center">
          <Text className=" text-white text-xl  font-extrabold ">
            Hasan Naim
          </Text>
          <Text className=" text-white text-sm  font-thin">
            hasan1ahmad7naim@gmail.com
          </Text>
        </View>

        <View className="flex-row justify-center items-center gap-3 mt-5 w-full">
          <TouchableOpacity className="w-fit px-3 py-1 bg-gray-800 rounded-3xl">
            <Text className="text-white" style={{ fontFamily: "Rubik-Medium" }}>
              {" "}
              Edit profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-fit px-3 py-1 bg-gray-800 rounded-3xl">
            <Text className="text-white" style={{ fontFamily: "Rubik-Medium" }}>
              {" "}
              Share Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center my-3 mt-5 py-10 gap-2">
          <LinearGradient
            colors={["#764BA2", "#667EEA"]}
            className="w-fit rounded-3xl px-4 py-1 "
            start={{ x: 0.7, y: 0 }}
          >
            <Text className="text-white">#Dancer</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#764BA2", "#667EEA"]}
            className="w-fit rounded-3xl px-4 py-1 "
            start={{ x: 0.7, y: 0 }}
          >
            <Text className="text-white">#Singer</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#764BA2", "#667EEA"]}
            className="w-fit rounded-3xl px-4 py-1 "
            start={{ x: 0.7, y: 0 }}
          >
            <Text className="text-white">#Programmer</Text>
          </LinearGradient>
        </View>

        <View className="flex-1 flex-col gap-3 w-full px-5">
          <TouchableOpacity className="w-full bg-gray-800 h-[60px] rounded-2xl flex-row items-center  px-3 gap-1">
            <Entypo name="lock" size={24} color="white" />
            <Text
              className="text-white text-lg"
              style={{ fontFamily: "Rubik-Medium" }}
            >
              Change password 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full bg-purple-900 h-[60px] rounded-2xl flex-row items-center  px-3 gap-1">
            <SimpleLineIcons name="logout" size={24} color="white" />
            <Text
              className="text-white text-lg"
              style={{ fontFamily: "Rubik-Medium" }}
            >
              {" "}
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const ProfileNavigation =()=>{
  return(       

<Stack.Navigator initialRouteName="ProfilePage" screenOptions={{headerShown:false}} >
  <Stack.Screen name="Following" component={Following} />
  <Stack.Screen name="Followers" component={Followers} />
  <Stack.Screen name="ProfilePage" component={ProfileScreen}/>
</Stack.Navigator>
 )


}
export default ProfileNavigation
