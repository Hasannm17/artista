import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Octicons, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../components/Categories";
import TopArtists from "../components/TopArtists";
import ArtistBooking from "./ArtistBooking";
import { useNavigation } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const data = [
    {
      name: "jack",
      id: "1",
    },
    {
      name: "angela",
      id: "2",
    },
    {
      name: "mike",
      id: "3",
    },
    
  ];
  const [input, setInput] = useState("");
  const [searchPressed, setSearchedPressed] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#0a0a0a] flex-1">
      <View className="flex-row justify-between items-center mt-8 mx-2">
        <View className="bg-[#242424] rounded-full p-3 m-4 w-fit">
          <AntDesign name="appstore-o" size={25} color="white" />
        </View>

        <Text
          className="text-white text-[16px] "
          style={{ fontFamily: "Rubik-Medium" }}
        >
          <Text className="text-gray-400"> Hello , </Text>Hasan{" "}
        </Text>

    <TouchableOpacity onPress={()=>{
      navigation.navigate("Profile")
    }}>  
        <Image
          className="h-[50px] w-[50px]  mr-2 rounded-full "
          source={{
            uri: "https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg",
          }}
        />
        </TouchableOpacity>
        
      </View>

      <View className=" w-full h-fit mt-5 ">
        <View className="bg-[#12021c] h-12 mx-2 rounded-full flex-row  justify-between items-center px-5 ">
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            className="text-gray-300 text-sm flex-1"
            onPressIn={() => {
              setSearchedPressed(true);
            }}
            placeholder="Search artist"
            placeholderTextColor={"#939294"}
          />
          {searchPressed ? (
            <FontAwesome
              name="times-circle-o"
              size={24}
              color="#939294"
              onPress={() => {
                setSearchedPressed(false);
              }}
              style={{ marginRight: 10 }}
            />
          ) : null}

          <AntDesign name="search1" size={24} color="white" />
        </View>
        <SearchFilter
          data={data}
          input={input}
          setinput={setInput}
          show={searchPressed}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            className="text-white z-0 text-[20px]  m-7"
            style={{ fontFamily: "Rubik-Black" }}
          >
            Select Catgories
          </Text>
          <Categories />
        </View>

        <View>
          <View className="flex-row justify-between items-center mx-2 ">
            <Text
              className="text-white z-0 text-[20px]  m-7"
              style={{ fontFamily: "Rubik-Black" }}
            >
              Top Artists
            </Text>
            <Text
              className="text-gray-500 z-0 text-[15px]  m-7"
              style={{ fontFamily: "Rubik-Medium" }}
            >
              See All
            </Text>
          </View>

          <TopArtists />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={ArtistBooking}
        options={{ tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
