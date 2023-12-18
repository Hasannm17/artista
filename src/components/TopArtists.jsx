import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const TopArtists = () => {
  const navigate = useNavigation();
  const top = [
    {
      id: 1,
      name: "Mike",
      category: "Dancer",
      url: "https://images.unsplash.com/photo-1582135739731-e748a423f4fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhbmNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "angela",
      category: "Singer",
      url: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "jack",
      category: "Painter",
      url: "https://i.pinimg.com/564x/53/84/aa/5384aa7017602c998a9f236b9f1f69ae.jpg",
    },
  ];


  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible pb-10 "
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    >
      {top.map((element, index) => {
        return (
          <TouchableOpacity
            style={{  shadowColor: "#9437fe",
              shadowRadius: 30,
              shadowOpacity: 0.6, // Adjust this value to control shadow opacity
              elevation: 14, }}
            key={index}
            className="shadow-lg  shadow-purple-800"
            onPress={()=>{
              navigate.navigate("Detail" , {...element})
            }}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#9437fe", "#8d02de", "#fae20f"]}
              className="h-fit w-fit p-6 flex-col justify-center  items-center mx-3  shadow  shadow-purple-800 rounded-3xl"
              key={index}
            >
              <Image
                source={{
                  uri: element.url,
                }}
                className="h-48 w-48 rounded-2xl"
              />
              <Text
                className="text-white mt-3 text-[17px]"
                style={{ fontFamily: "Rubik-Black" }}
              >
                {element.name}
              </Text>
              <Text
                className="text-white text-[12px]"
                style={{ fontFamily: "Rubik-Medium" }}
              >
                {element.category}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default TopArtists;
