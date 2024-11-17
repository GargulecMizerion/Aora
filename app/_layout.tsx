import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";
import TabsLayout from "../app/(tabs)/_layout.jsx";
import Home from "@/app/(tabs)/home";
import headerShownContext from "@react-navigation/elements/src/Header/HeaderShownContext";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack screenOptions={{}}>
      {/*<Stack.Screen name="search" options={{ headerShown: false }} />*/}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Pierwszy w Stacku okresla ekran startowy   */}
      {/*<Stack.Screen name="profile" />*/}
    </Stack>
  );
};
export default RootLayout;
