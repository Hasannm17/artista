import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const navigate =useNavigation()
  return (
    <SafeAreaView className="flex-1  bg-black flex-col items-center justify-center gap-4">

<Image source={require("./../../assets/adaptive-icon.png")} className="h-48 w-48" />

      <Text className="text-white" style={{ fontFamily: "Rubik-Medium" }}>
        Login to your account
      </Text>
      <View className="bg-none h-[55px] w-[300px] border-white border rounded-3xl flex-row  items-center ">
        <MaterialIcons
          name="email"
          size={24}
          color="white"
          style={{ marginHorizontal: 10 }}
        />
        <TextInput
          textContentType="emailAddress"
          className="text-white flex-1 "
          placeholder="Enter your email"
          placeholderTextColor={"gray"}
        />
      </View>
      <View className="bg-none h-[55px] w-[300px] border-white border rounded-3xl flex-row  items-center ">
        <Entypo
          name="lock"
          size={24}
          color="white"
          style={{ marginHorizontal: 10 }}
        />
        <TextInput
          textContentType="emailAddress"
          className="text-white flex-1 "
          placeholder="Enter password"
          placeholderTextColor={"gray"}
        />
      </View>

      <TouchableOpacity className="bg-primary h-[55px] w-[300px] rounded-3xl flex-row justify-center  items-center ">
        <Text className="text-white  " style={{ fontFamily: "Rubik-Medium" }}>
          Sign in
        </Text>
      </TouchableOpacity>

      {/*   <Text
        className="text-white text-xs "
        style={{ fontFamily: "Rubik-Medium" }}
      >
        -or sign in with-
      </Text>

      <TouchableOpacity className="bg-purple-50 h-[55px] w-[150px] rounded-3xl flex-row justify-center  items-center ">
        <Image
          source={require("./../../assets/images/google.png")}
          className="h-10 w-10 "
        />
      </TouchableOpacity>
  */}

      <Text
        className="text-white text-xs pt-2 "
        style={{ fontFamily: "Rubik-Medium" }}
      >
        Don't have an account?{" "}
        <Text
          className="text-primary text-[14px]   "
          style={{ fontFamily: "Rubik-Medium" }}
          onPress={()=>{
            navigate.navigate("Signup")
          }}
        >
          Sign up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
