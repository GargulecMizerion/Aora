import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-extrabold">Aora!</Text>
      <StatusBar backgroundColor="blue" style="auto" />
      <Link href={"/home"} style={{ color: "blue" }}>
        {" "}
        Go To Home
      </Link>
    </View>
  );
}
