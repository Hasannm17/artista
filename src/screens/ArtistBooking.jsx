import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { BackHandler } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const ArtistBooking = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    const backAction = () => {
      // Navigate to the home screen when the back button is pressed
      navigation.navigate("HomePage");
      return true; // Prevent default behavior (exit the app)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener on component unmount
  }, [navigation]);
  return (
    <SafeAreaView className="bg-black flex-1">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomePage");
        }}
        className="bg-black rounded-full h-[40px] w-[40px] z-10 absolute  top-8 left-5 flex-row justify-center items-center"
      >
        <AntDesign name="back" size={22} color="white" />
      </TouchableOpacity>

      <View className="h-fit relative">
        <Image
          className="h-[90%] w-full "
          blurRadius={7}
          source={{
            uri: item?.url,
          }}
        />
        <LinearGradient
          colors={["transparent", "black"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.3 }}
          className="absolute bottom-0 z-0 w-full h-[150px]"
        />

        <View
          style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}
          className="  mx-4 -mt-36"
        >
          <View className="flex-row justify-between px-2 my-2">
            <View className="flex-col gap-3 px-3  ">
              <Text
                className="text-white text-[20px]"
                style={{ fontFamily: "Rubik-Black" }}
              >
                {item.name}
              </Text>
              <View className="flex-row justify-center items-center  ">
                <EvilIcons
                  name="location"
                  size={24}
                  color="white"
                  style={{ marginLeft: -10 }}
                />
                <Text className="text-white font-light text-sm ml-1">
                  San Francicso , CA
                </Text>
              </View>
              <View className="flex-row justify-center items-center ">
                <AntDesign name="star" size={24} color="yellow" />
                <Text
                  className="text-white text-lg ml-1"
                  style={{ fontFamily: "Rubik-Medium" }}
                >
                  4.5 <Text className="">/5.0</Text>
                </Text>
              </View>
            </View>

            <View className="flex-col ">
              <TouchableOpacity
                onPress={() => {
                  if (follow) {
                    setFollow(false);
                  } else setFollow(true);
                }}
                className={` ${
                  !follow
                    ? "bg-[#9437fe] h-[40px] w-[100px] flex-row  rounded-3xl justify-center items-center"
                    : "bg-none border border-primary h-[40px] w-fit px-4 flex-row  rounded-3xl justify-center items-center"
                } `}
              >
                {!follow ? (
                  <>
                  
                    <Entypo name="plus" size={20} color="white" />
                    <Text
                      className="text-white"
                      style={{ fontFamily: "Rubik-Medium" }}
                    >
                      Follow
                    </Text>
                  </>
                ) : (
                  <>
           
           <AntDesign name="check" size={24} color="white" />
                    <Text
                      className="text-white ml-2"
                      style={{ fontFamily: "Rubik-Medium" }}
                    >
                      Following
                    </Text>
                  </>
                )}
      
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-center gap-2">
            <LinearGradient
              colors={["#764BA2", "#667EEA"]}
              className="w-fit rounded-3xl px-4 py-1 "
              start={{ x: 0.7, y: 0 }}
            >
              <Text className="text-white">#{item?.category} </Text>
            </LinearGradient>
            <LinearGradient
              colors={["#764BA2", "#667EEA"]}
              className="w-fit rounded-3xl px-4 py-1 "
              start={{ x: 0.7, y: 0 }}
            >
              <Text className="text-white">#Dancer</Text>
            </LinearGradient>
          </View>
        </View>
      </View>

      <View className="flex-1 flex-col-reverse gap-2  my-3">
        <TouchableOpacity className="bg-none border border-primary h-[60px] flex-row justify-center items-center rounded-full mx-2 ">
          <Entypo name="direction" size={30} color="white" />
          <Text
            className="text-white text-[20px] ml-3"
            style={{ fontFamily: "Rubik-Medium" }}
          >
            Direct message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#9437fe] h-[60px] flex-row justify-center items-center rounded-full mx-2 ">
          <Text
            className="text-white text-[20px]"
            style={{ fontFamily: "Rubik-Medium" }}
          >
            Book Now{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ArtistBooking;
