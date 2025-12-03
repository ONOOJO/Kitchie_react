// app/(tabs)/_layout.tsx
import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "none", // hide default bar, use our custom one
        },
      }}
      tabBar={({ state, navigation }) => (
        <View style={styles.tabBarWrapper}>
          <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;

              let icon = null;
              if (route.name === "homescreen") {
                  icon = (
                    <Ionicons
                    name="home"
                    size={26}
                    color="#ffe9dc"
                  />
                );
              } else if (route.name === "stockscreen") {
                  icon = (
                    <Feather
                    name="edit-3"
                    size={24}
                    color="#ffe9dc"
                  />
                );
              }
              // when you add more screens, add icons here:
              // else if (route.name === "shopping") { ... }
              // else if (route.name === "search") { ... }

              const onPress = () => {
                if (!isFocused) {
                  navigation.navigate(route.name);
                }
              };

              return (
                <TouchableOpacity
                  key={route.key}
                  style={[
                    styles.tabButton,
                    isFocused && styles.tabButtonActive,
                  ]}
                  activeOpacity={0.8}
                  onPress={onPress}
                >
                  {icon}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    >
      <Tabs.Screen
        name="homescreen"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="stockscreen"
        options={{ title: "Inventory" }}
      />
      {/* later you can add: */}
      {/* <Tabs.Screen name="shopping" options={{ title: "Shopping" }} /> */}
      {/* <Tabs.Screen name="search" options={{ title: "Search" }} /> */}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    paddingTop: 12,
    backgroundColor: "#f7b7a356",
  },
  tabBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#b7747c",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButtonActive: {
    backgroundColor: "rgba(255, 233, 220, 0.25)",
  },
});
