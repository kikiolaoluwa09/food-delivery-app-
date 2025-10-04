import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Button } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import CustomInput from "@/Components/CustomInput";
import CustomButton from "@/Components/CustomButton";
import { signIn } from "@/lib/appwrite";
import * as Sentry from '@sentry/react-native'

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const {email, password} = form
    if (!email || !password)
      return Alert.alert("Error", "Please enter valid email address");

    setIsSubmitting(true);
    try {
      //appwrite sign in function
      await signIn({email, password})
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
      Sentry.captureEvent(error)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry
      />
      <CustomButton
       title="Sign In"
       isLoading={isSubmitting}
       onPress={submit} />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Dont have an account?
        </Text>
        <Link href='/SignUp' className="base-bold text-primary">
          SignUp
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
