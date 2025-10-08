import CustomHeader from "@/Components/CustomHeader";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/Constants";

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 pb-[8rem]" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mt-5 mx-5">
          <CustomHeader title="Profile" />
        </View>

        {/* Profile Image */}
        <View className="items-center mt-6">
          <TouchableOpacity className="relative">
            <Image source={images.avatar} />
            <TouchableOpacity className="absolute right-4 bottom-3 bg-primary p-2 rounded-full">
              <Image source={images.pencil} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View className="bg-white rounded-2xl p-5 mx-5 mt-8">
          {/* Full Name */}
          <View className="flex-row items-center py-4">
            <View className="w-10 h-10 bg-orange-50 rounded-full items-center justify-center">
              <Image source={images.user} style={{ height: 20, width: 20 }} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xs text-gray-500 mb-1">Full Name</Text>
              <Text className="text-base text-gray-900">Adrian Hajdin</Text>
            </View>
          </View>

          {/* Email */}
          <View className="flex-row items-center py-4">
            <View className="w-10 h-10 bg-orange-50 rounded-full items-center justify-center">
              <Image source={images.envelope} style={{ height: 20, width: 20 }} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xs text-gray-500 mb-1">Email</Text>
              <Text className="text-base text-gray-900">tunde@dev.com</Text>
            </View>
          </View>

          {/* Phone number */}
          <View className="flex-row items-center py-4">
            <View className="w-10 h-10 bg-orange-50 rounded-full items-center justify-center">
              <Image source={images.phone} style={{ height: 20, width: 20 }} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xs text-gray-500 mb-1">Phone number</Text>
              <Text className="text-base text-gray-900">+234 222 444 6666</Text>
            </View>
          </View>

          {/* Address 1 - Home */}
          <View className="flex-row items-center py-4">
            <View className="w-10 h-10 bg-orange-50 rounded-full items-center justify-center">
              <Image source={images.location} style={{ height: 20, width: 20 }} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xs text-gray-500 mb-1">Home Address</Text>
              <Text className="text-base text-gray-900">
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </View>
          </View>

          {/* Address 2 - Work */}
          <View className="flex-row items-center py-4">
            <View className="w-10 h-10 bg-orange-50 rounded-full items-center justify-center">
              <Image source={images.location} style={{ height: 20, width: 20 }} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xs text-gray-500 mb-1">Work Address</Text>
              <Text className="text-base text-gray-900">
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View className="mx-5 mt-8 mb-8">
          {/* Edit Profile */}
          <TouchableOpacity className="bg-orange-100 border-2 border-primary rounded-full p-5 mb-4 active:opacity-80">
            <Text className="text-primary text-center font-semibold text-base">
              Edit Profile
            </Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity className="bg-red-100 border-2 border-error rounded-full p-5 active:opacity-80">
            <View className="flex-row items-center justify-center gap-x-2">
              <Image source={images.logout} style={{ height: 25, width: 25 }} />
              <Text className="text-error text-center font-semibold text-base">
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;