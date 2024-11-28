import { ScrollView, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "../../components/CustomButton";
import { createUser } from "../../lib/appwrite";
const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.password || !form.email) {
      Alert.alert("Error", "Please fill in all fields.");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form);

      // Później bedzie ustawiany context
      setForm({ username: "", email: "", password: "" });
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }

    createUser(form);
  };

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
            Sign Up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className={"flex-row justify-center pt-5 gap-2"}>
            <Text className={"text-lg text-gray-100"}>
              Have account already?
            </Text>
            <Link href="/sign-in" className="text-lg text-secondary-100">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
