import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const SearchFilter = ({ data, input, setinput , show }) => {
  return (
    <View style={{ marginTop: 10 }} className={`rounded-lg px-10 z-10 w-full absolute top-10 bg-[#9437fe] ${show?"" : "hidden" } `}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={{ marginVertical: 10 }} className="flex-row justify-between items-center">
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" ,  fontFamily: "Rubik-Medium" }} >{item.name}</Text>
              <AntDesign name="heart" size={20} color="white" />
            </View>
            );
          }
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={{ marginVertical: 10 }} className="flex-row justify-between items-center">
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" ,  fontFamily: "Rubik-Medium" }} >{item.name}</Text>
              <AntDesign name="heart" size={20} color="white" />
            </View>
            );
          }
        }}
      />
    </View>
  );
}

export default SearchFilter;
