import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import Inbox from "../pages/Inbox";
import Marketplace from "../pages/Marketplace";
import SearchServices from "../pages/Services";
import MyGigs from "./MyGigs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 0,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: "#fff",
          height: 50,
          margin: 0,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          borderRadius: 0,
        },
        tabBarLabelStyle: {
          padding: 0,
          // display: "none",
        },
        // tabBarLabel: "",
        tabBarActiveBackgroundColor: "rgba(226,221,251,0.3)",
        tabBarActiveTintColor: "rgb(120,82,243)",
        tabBarInactiveTintColor: "#7D7C7B",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={SearchServices}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="design-services" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="diamond" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="email-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyGigs"
        component={MyGigs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigator;
