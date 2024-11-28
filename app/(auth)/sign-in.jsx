import { ScrollView, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "../../components/CustomButton";
import { signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  // Stany
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields.");
    }
    try {
      const result = await signIn(form);

      setUser(result);
      setIsLoggedIn(true);
      setForm({ email: "", password: "" });
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
      throw new Error(error.message);
    } finally {
      setIsSubmitting(false);
    }
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
            Log in to Aora
          </Text>
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
            title="Login"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className={"flex-row justify-center pt-5 gap-2"}>
            <Text className={"text-lg text-gray-100"}>
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg text-secondary-100">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
