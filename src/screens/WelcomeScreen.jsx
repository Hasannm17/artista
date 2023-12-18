import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const Navigate = useNavigation();

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        className="flex-1 justify-center items-center"
        source={{
          uri: "https://images.unsplash.com/photo-1607371059636-720f2c169e82?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <SafeAreaView className="flex-col  justify-between flex-1">
          <View className=" -my-10 flex-row  justify-between ">
            <View className="flex-col gap-3">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1657456621506-76924543dbca?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1595681224916-98844d59ea47?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1593382067395-ace3045a1547?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
            </View>

            <View className="flex-col gap-3 -mt-10">
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1675195129732-4b74822023ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
            </View>

            <View className="flex-col gap-3 ">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1516146544193-b54a65682f16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className="h-28 w-24 rounded-2xl"
              />
            </View>
          </View>
          <View className="flex-1 flex-col justify-between py-10 items-center  bg-gray-50 mt-24 rounded-t-[30px] mx-0 relative ">
            <View className="bg-gray-700 h-1 w-7 absolute top-2 translate-x-1/2 rounded-full " />
            <Text
              className=" text-[30px] text-purple-600"
              style={{ fontFamily: "Rubik-Black" }}
            >
              Book Your Artist!
            </Text>
            <Text
              className=" text-[15px] text-purple-950 px-10 text-center"
              style={{ fontFamily: "Rubik-Black" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>

            <TouchableOpacity
              className="flex-row bg-black h-[50px] justify-center items-center  px-4 rounded-full mt-5 "
              onPress={() => {
                Navigate.navigate("Main");
              }}
            >
              <Text
                className="text-[20px] text-white "
                style={{ fontFamily: "Rubik-Medium" }}
              >
                {" "}
                Start Now
              </Text>
              <Ionicons name="arrow-forward-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;
