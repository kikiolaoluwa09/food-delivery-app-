import { images } from '@/Constants'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'

import { getCurrentUser } from '@/lib/appwrite'

const ProfileInfo = () => {
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
    <View className="bg-white rounded-2xl p-5 mx-5 mt-8">
          {/* Full Name */}
          <View className="flex-row items-center py-4">
            <View className="w-10 h-10 bg-orange-50 rounded-full items-center justify-center">
              <Image source={images.user} style={{ height: 20, width: 20 }} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xs text-gray-500 mb-1">Full Name</Text>
              <Text className="text-base text-gray-900">{user.name}</Text>
            </View>
          </View>

          {/* Email */}
          <View className="flex-row items-center py-4">
            <View className="w-10 h-10 bg-orange-50 rounded-full items-center justify-center">
              <Image source={images.envelope} style={{ height: 20, width: 20 }} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-xs text-gray-500 mb-1">Email</Text>
              <Text className="text-base text-gray-900">{user.email}</Text>
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
  )
}

export default ProfileInfo