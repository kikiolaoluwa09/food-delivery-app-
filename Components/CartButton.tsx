import { View, Text, TouchableOpacity,  Image } from "react-native";
import React from "react";
import { images } from "@/Constants";
import { useCartStore } from "@/store/cart.store";

const CartButton = () => {

  const {getTotalItems}= useCartStore()

  const totalItems = getTotalItems();
  return (
    <TouchableOpacity className="card-btn" onPress={() => {}}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
      <Text>Cart</Text>
    </TouchableOpacity>
  );
};

export default CartButton;
