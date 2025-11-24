// src/screens/HomeScreen.tsx
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./index.styles";

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.logoText}>Kitchie</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="settings" size={22} color="#f29f9b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="menu" size={22} color="#f29f9b" />
          </TouchableOpacity>
        </View>
      </View>

      {/* KITCHEN AREA */}
      <View style={styles.kitchenArea}>
        {/* Middle shelf */}
        <View style={styles.produce}>
          <Image 
            source={require("../assets/images/Milk.png")}
            style={styles.milkBottle}
          />
          <Image
            source={require("../assets/images/Carrot.png")}
            style={styles.carrot}
          />
          <Image
            source={require("../assets/images/Soy_sauce.png")}
            style={styles.soySauce}
          />
          <Image
            source={require("../assets/images/Egg.png")}
            style={styles.egg}
          />
        </View>
        {/* Cabinet base (just background block to mimic counter) */}
        <View style={styles.cabinetRow}>
          <View style={styles.cabinetLeft} />
          <View style={styles.cabinetRight}>
            <View style={styles.cabinetDrawer} />
            <View style={styles.cabinetDoor} />
          </View>
        </View>
      </View>

      {/* BOTTOM TABS */}
      <View style={styles.tabBarWrapper}>
        <View style={styles.tabBar}>
          <TabButton
            icon={<Ionicons name="home" size={26} color="#ffe9dc" />}
            active
          />
          <TabButton
            icon={<Feather name="edit-3" size={24} color="#ffe9dc" />}
          />
          <TabButton
            icon={<Feather name="shopping-cart" size={24} color="#ffe9dc" />}
          />
          <TabButton
            icon={<Feather name="search" size={24} color="#ffe9dc" />}
          />
        </View>
      </View>
    </View>
  );
};

type TabButtonProps = {
  icon: React.ReactNode;
  active?: boolean;
};

const TabButton: FC<TabButtonProps> = ({ icon, active }) => {
  return (
    <TouchableOpacity
      style={[
        styles.tabButton,
        active && styles.tabButtonActive,
      ]}
      activeOpacity={0.8}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default HomeScreen;

