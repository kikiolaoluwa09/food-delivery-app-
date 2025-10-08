import CustomHeader from "@/Components/CustomHeader";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProfilePic from "@/Components/ProfilePic";
import { images } from "@/Constants";

import ProfileInfo from "@/Components/ProfileInfo";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        className="flex-1 pb-[8rem]"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mt-5 mx-5">
          <CustomHeader title="Profile" />
        </View>

        {/* Profile Image */}
        <ProfilePic />

        {/* Profile Info */}
        <ProfileInfo />

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
              <Text className="text-error text-center font-semibold text-base">Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
