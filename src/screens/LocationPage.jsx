import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { LinearGradient } from 'expo-linear-gradient';
const LocationPage = () => {
  const [mapRegion, setMapregoin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (

//you can access this component only using expo go 


    <SafeAreaView classname="flex-1">
      <MapView style={{ height: "100%", width: "100%" }} region={mapRegion}>
        <Marker coordinate={mapRegion} title={"Hasan"} description={"Nai"} >
        <LinearGradient

      style={{borderRadius:100 , height:35, width:35 , display:"flex" , flexDirection:"row" , justifyContent:"center" , alignItems:"center"}}
        colors={['#9437fe', 'red']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>  
          <Image  style={{height:30, width:30 ,borderRadius:100 ,padding:3 }} source={{uri:"https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg"}} />
          </LinearGradient>
          </Marker>
      </MapView>
    
    </SafeAreaView>
  );
};

export default LocationPage;
