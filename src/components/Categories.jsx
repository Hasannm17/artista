import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Categories = () => {
  const [activeCategory, setactiveCategory] = useState(null);
  const catg = [
    { id: 1, name: "singer" },
    {
      id: 2,
      name: "Painting",
    },
    {
      id: 3,
      name: "Graphic design",
    },
    {
      id: 4,
      name: "Literature",
    },
    {
      id: 5,
      name: "Music",
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible  "
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    >
      {catg.map((category, index) => {
        let isActive = category.id == activeCategory;
        let btnClass = isActive
          ? " bg-[#9437fe] "
          : "bg-none border border-gray-600";

        return (
          <View key={index} className="flex justify-center items-center mr-2 ">
            <TouchableOpacity
              onPress={() => setactiveCategory(category.id)}
              className={`h-[40px] w-full px-2 rounded-full shadow flex-row items-center  ${btnClass}  `}
            >
              <Text
                className={`text-sm text-white `}
                style={{ fontFamily: "Rubik-Medium" }}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
