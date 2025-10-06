import { View, Text, ScrollView, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/Constants";
import { useState } from "react";
import { router } from "expo-router";

interface ProfileOption {
  id: string;
  title: string;
  icon: any;
  onPress: () => void;
  showArrow?: boolean;
  isDanger?: boolean;
}

const ProfileOptionItem = ({ 
  title, 
  icon, 
  onPress, 
  showArrow = true,
  isDanger = false 
}: ProfileOption) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between bg-white px-5 py-4 mb-3 rounded-2xl"
    style={Platform.OS === "android" ? { elevation: 2, shadowColor: "#000" } : {}}
  >
    <View className="flex-row items-center gap-4">
      <View className="w-10 h-10 items-center justify-center bg-gray-100 rounded-full">
        <Image
          source={icon}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
          tintColor={isDanger ? "#EF4444" : "#1F2937"}
        />
      </View>
      <Text className={`text-base font-semibold ${isDanger ? "text-red-500" : "text-gray-900"}`}>
        {title}
      </Text>
    </View>
    {showArrow && (
      <Image
        source={images.arrowRight}
        style={{ width: 20, height: 20 }}
        resizeMode="contain"
        tintColor="#9CA3AF"
      />
    )}
  </TouchableOpacity>
);

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar: images.avatar,
  });

  const accountOptions: ProfileOption[] = [
    {
      id: "1",
      title: "Edit Profile",
      icon: images.pencil,
      onPress: () => console.log("Edit Profile"),
    },
    {
      id: "2",
      title: "Delivery Address",
      icon: images.location,
      onPress: () => console.log("Delivery Address"),
    },
    {
      id: "3",
      title: "Payment Methods",
      icon: images.dollar,
      onPress: () => console.log("Payment Methods"),
    },
  ];

  const generalOptions: ProfileOption[] = [
    {
      id: "4",
      title: "Order History",
      icon: images.bag,
      onPress: () => console.log("Order History"),
    },
    {
      id: "5",
      title: "Notifications",
      icon: images.envelope,
      onPress: () => console.log("Notifications"),
    },
    {
      id: "6",
      title: "Help & Support",
      icon: images.phone,
      onPress: () => console.log("Help & Support"),
    },
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout");
    // router.replace("/login");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="px-5 pt-5 pb-8">
          <Text className="text-3xl font-bold text-gray-900">Profile</Text>
        </View>

        {/* User Info Card */}
        <View className="mx-5 mb-6">
          <View
            className="bg-white rounded-3xl p-6 items-center"
            style={Platform.OS === "android" ? { elevation: 3, shadowColor: "#000" } : {}}
          >
            <View className="relative mb-4">
              <Image
                source={user.avatar}
                style={{ width: 100, height: 100 }}
                className="rounded-full"
                resizeMode="cover"
              />
              <TouchableOpacity
                className="absolute bottom-0 right-0 bg-orange-500 w-8 h-8 rounded-full items-center justify-center"
                style={Platform.OS === "android" ? { elevation: 4, shadowColor: "#000" } : {}}
              >
                <Image
                  source={images.pencil}
                  style={{ width: 16, height: 16 }}
                  resizeMode="contain"
                  tintColor="#FFF"
                />
              </TouchableOpacity>
            </View>

            <Text className="text-xl font-bold text-gray-900 mb-1">
              {user.name}
            </Text>
            <Text className="text-sm text-gray-500 mb-1">{user.email}</Text>
            <Text className="text-sm text-gray-500">{user.phone}</Text>
          </View>
        </View>

        {/* Account Section */}
        <View className="px-5 mb-6">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Account Settings
          </Text>
          {accountOptions.map((option) => (
            <ProfileOptionItem key={option.id} {...option} />
          ))}
        </View>

        {/* General Section */}
        <View className="px-5 mb-6">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            General
          </Text>
          {generalOptions.map((option) => (
            <ProfileOptionItem key={option.id} {...option} />
          ))}
        </View>

        {/* Logout Button */}
        <View className="px-5">
          <ProfileOptionItem
            id="logout"
            title="Logout"
            icon={images.logout}
            onPress={handleLogout}
            showArrow={false}
            isDanger={true}
          />
        </View>

        {/* App Version */}
        <View className="items-center mt-8">
          <Text className="text-sm text-gray-400">Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;