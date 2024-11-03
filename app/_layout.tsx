import {StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {Slot, SplashScreen, Stack} from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
    const [fontsLoaded, error] = useFonts( {
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    })


    useEffect(() => {
        if(error) throw error;

        if(fontsLoaded) SplashScreen.hideAsync();

    },[fontsLoaded, error]);

    if(!fontsLoaded && !error) return null;


    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            {/* Pierwszy w Stacku okresla ekran startowy   */}
            {/*<Stack.Screen name="profile" />*/}
        </Stack>
    )
}
export default RootLayout
