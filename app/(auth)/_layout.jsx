import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { useUser } from "../../Hooks/useUser"
import GuestOnly from "../../Components/auth/GuestOnly"

export default function AuthLayout() {
  const {user} = useUser
  console.log(user)
  
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{ headerShown: false, animation: "none" }} 
      />
    </GuestOnly>

    
  )
}