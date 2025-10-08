import { images } from "@/Constants";
import { getCurrentUser } from "@/lib/appwrite"; // adjust path
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";

const ProfilePic = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (error) {
        console.log("Error loading user:", error);
      }
    };
    loadUser();
  }, []);

  if (!user) return <ActivityIndicator />;

  return (
    <View className="items-center mt-6">
      <TouchableOpacity className="relative">
        <Image
          source={{ uri: user.avatar }}
          className="w-40 h-40 rounded-full"
          resizeMode="cover"
        />
        <TouchableOpacity className="absolute right-4 bottom-3 bg-primary p-2 rounded-full">
          <Image source={images.pencil} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
export default ProfilePic;
