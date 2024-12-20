import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";
import TabsLayout from "../app/(tabs)/_layout.jsx";
import Home from "@/app/(tabs)/home";
import headerShownContext from "@react-navigation/elements/src/Header/HeaderShownContext";
import GlobalProvider from "../context/GlobalProvider";

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

  console.log();

  return (
    <GlobalProvider>
      <Stack>
        {/*<Stack.Screen name="search" options={{ headerShown: false }} />*/}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="/search/[query]" options={{ headerShown: false }} />

        {/* Pierwszy w Stacku okresla ekran startowy   */}
        {/*<Stack.Screen name="profile" />*/}
      </Stack>
    </GlobalProvider>
  );
};
export default RootLayout;
