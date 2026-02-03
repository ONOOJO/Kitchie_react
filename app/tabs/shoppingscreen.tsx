import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/shoppingscreen.styles";

const ShoppingScreen: FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Ionicons name="chevron-back" size={24} color="#f29f9b" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Shopping List</Text>

          {/* Empty spacer to balance the layout */}
          <View style={styles.iconButton} />
        </View>
      </View>
    </SafeAreaView>  
  );
}

export default ShoppingScreen;
