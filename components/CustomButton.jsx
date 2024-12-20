import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] w-full justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : "opacity-100"}`}
      onPress={handlePress}
      activeOpacity={0.6}
      disabled={isLoading}
    >
      <Text className={`text-primary font-bold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
