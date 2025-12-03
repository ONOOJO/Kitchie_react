import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/homescreen.styles";
import WiggleImage from "../components/WiggleImage";


const HomeScreen: FC = () => {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../assets/images/background_home.png")}
      style={styles.background_home}
      resizeMode="cover"  
    >

      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <Image
            source={require("../../assets/images/Kitchie_logo.png")}
            style={styles.logoImage}
            />

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="settings" size={22} color="#f29f9b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* KITCHEN AREA */}
        <View style={styles.kitchenArea}>
          {/* Middle shelf */}
          <View style={styles.produce}>
            <WiggleImage source={require("../../assets/images/Milk.png")}
              style={styles.milkBottle}/>
            <WiggleImage source={require("../../assets/images/Carrot.png")}
              style={styles.carrot}/>
            <WiggleImage source={require("../../assets/images/Soy_sauce.png")}
              style={styles.soySauce}/>
            <WiggleImage source={require("../../assets/images/Egg.png")}
              style={styles.egg}/>
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
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

