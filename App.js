import "./global.css";
import { View, Text, TextInput, Pressable } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-gray-100 justify-center px-6">
      {/* Header */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-gray-800">Login </Text>
      </View>
      {/* Email Input */}
      <View className="mb-4">
        <Text className="mb-1">
          Email
        </Text>
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3"
          placeholder="Enter your email..."
        />
      </View>

      {/* Password Input */}
      <View className="mb-4">
        <Text className="mb-1">
          Password
        </Text>
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3"
          placeholder="Enter your password..."
          secureTextEntry
        />
      </View>

      {/* Button */}
      <Pressable className="bg-blue-500 py-4 rounded-xl">
        <Text className="text-white text-center font-semibold">
          Login
        </Text>
      </Pressable>
    </View>
  );
}