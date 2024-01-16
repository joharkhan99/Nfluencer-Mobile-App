import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import { useAuth } from "./redux/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDarkMode } from "./redux/DarkModeContext";

function Settings() {
  const { clearUserDetails } = useAuth();
  const navigation = useNavigation();
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);
  const { setColorScheme } = useColorScheme();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  console.log(isDarkMode);

  const handleColorScheme = () => {
    toggleDarkMode();

    setDarkModeSwitch(isDarkMode);
    AsyncStorage.setItem("colorScheme", isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    setColorScheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleLogout = () => {
    clearUserDetails();
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white dark:bg-[#24293e]">
      <View className="flex-1 bg-white dark:bg-[#24293e]">
        {/* Top Bar */}
        <View className="flex-row justify-between items-center p-4 pt-0">
          <Text className="text-2xl font-bold text-gray-800 dark:text-white">
            Settings
          </Text>
        </View>

        <ScrollView>
          <View className="p-4 pt-0 pb-12">
            <View className="flex flex-col">
              <View className="flex flex-row items-center justify-between border-b border-b-gray-200 dark:border-b-gray-700 py-4">
                <View className="flex items-center flex-row gap-5">
                  {darkModeSwitch ? (
                    <MaterialCommunityIcons
                      name="theme-light-dark"
                      size={24}
                      color="rgba(96, 101, 122, 1)"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="theme-light-dark"
                      size={24}
                      color="rgba(55, 65, 81, 1)"
                    />
                  )}

                  <Text className="text-gray-700 dark:text-white font-bold">
                    Toggle Dark Mode
                  </Text>
                </View>

                <Switch
                  trackColor={{
                    false: "#ccc",
                    true: "rgba(120, 82, 243, 0.4)",
                  }}
                  thumbColor={isDarkMode ? "rgba(120, 82, 243, 1)" : "#f4f3f4"}
                  onValueChange={handleColorScheme}
                  value={isDarkMode}
                />
              </View>

              <TouchableOpacity
                className="flex flex-row items-center justify-between border-b border-b-gray-200 dark:border-b-gray-700 py-4"
                onPress={handleLogout}
              >
                <View className="flex items-center flex-row gap-5">
                  {isDarkMode ? (
                    <MaterialIcons
                      name="logout"
                      size={24}
                      color="rgba(96, 101, 122, 1)"
                    />
                  ) : (
                    <MaterialIcons
                      name="logout"
                      size={24}
                      color="rgba(55, 65, 81, 1)"
                    />
                  )}

                  <Text className="text-gray-700 dark:text-white font-bold">
                    Logout
                  </Text>
                </View>
                <Entypo name="chevron-small-right" size={28} color="#bbbdc9" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Settings;
