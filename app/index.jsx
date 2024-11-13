import { Stack } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode={"contain"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
