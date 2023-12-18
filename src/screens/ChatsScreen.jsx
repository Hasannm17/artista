import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const ChatsScreen = () => {
  const [shown, setShown] = useState(true);

  const messagetimeout = async () => {
    setTimeout(() => {
      setShown(false);
    }, 10000);
  };

  useEffect(() => {
    messagetimeout();
  }, [shown]);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <Text
        className={`            ${
          shown ? "text-gray-300 text-[13px] font-light    m-2 " : "hidden"
        }   `}
      >
        Only people you follow and follows you back are allowed to open a chat ,
        have a great day!
      </Text>

<ScrollView showsVerticalScrollIndicator={false}  className="flex-1">












</ScrollView>

    </SafeAreaView>
  );
};

export default ChatsScreen;
