import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "react-native";
import { images } from "@/Constants";

const SearchBar = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [query, setQuery] = useState(params.query || "");

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.trim()) {
      router.setParams({ query: undefined });
    }
  };

  const handleSubmit = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.setParams({ query: trimmedQuery });
    }
  };

  return (
    <View className="searchbar">
      <TextInput
        className="flex-1 p-5"
        placeholder="Search for pizzas, burgers ..."
        value={query}
        onChangeText={handleSearch}
        placeholderTextColor="#a0a0a0"
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity 
        className="pr-5 justify-center items-center" 
        onPress={handleSubmit}
        disabled={!query.trim()}
      >
        <Image
          source={images.search}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
          tintColor={query.trim() ? "#5d5f6d" : "#d0d0d0"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;