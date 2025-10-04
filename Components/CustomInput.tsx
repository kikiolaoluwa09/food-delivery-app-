import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { CustomInputProps } from "@/type";
import cn from 'clsx'

const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {

  const [isFocused, setisFocused] = useState<boolean>(false)
  
  return (
    <View className="w-full mb-4">
      <Text className="label mb-2">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setisFocused(true)}
        onBlur={() => setisFocused(false)}
        placeholder={placeholder}
        placeholderTextColor='#888'
        className={cn('input', isFocused ? 'border-primary': 'border-gray-300')}
      />
    </View>
  );
};

export default CustomInput;