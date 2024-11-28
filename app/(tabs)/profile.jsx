import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { logout } from "../../lib/appwrite";
import { replace } from "expo-router/build/global-state/routing";
import { router } from "expo-router";

const Profile = () => {
  const onPressHandle = () => {
    logout();
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <StatusBar backgroundColor="purple" barStyle="light-content" />
      <CustomButton title={"Logout"} handlePress={onPressHandle}></CustomButton>
    </SafeAreaView>
  );
};
export default Profile;
