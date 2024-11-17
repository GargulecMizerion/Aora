import { ScrollView, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useNavigation } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="flex-1 bg-primary w-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="w-full">
        <View className={" flex-1 justify-center items-center w-full"}>
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text
            className="text-4xl text-white font-bold"
            style={{ marginTop: 40 }}
          >
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm(...form, (form.email = e))}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm(...form, (form.password = e))}
            otherStyles="mt-7"
            keyboardType="password"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
