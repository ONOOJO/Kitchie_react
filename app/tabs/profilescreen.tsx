// app/(tabs)/profilescreen.tsx
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { FC, useCallback, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/profilescreen.styles";

const STATS_KEY = "kitchie.stats.v1";
const PROFILE_KEY = "kitchie.profile.v1";

type Stats = {
  recipesCooked: number;
  ingredientsBought: number;
};

type Profile = {
  name: string;
};

const ProfileScreen: FC = () => {
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({ recipesCooked: 0, ingredientsBought: 0 });
  const [profile, setProfile] = useState<Profile>({ name: "Chef" });

  // Name editing
  const [nameModalVisible, setNameModalVisible] = useState(false);
  const [draftName, setDraftName] = useState("");

  useFocusEffect(
    useCallback(() => {
      let alive = true;

      (async () => {
        try {
          const [statsRaw, profileRaw] = await Promise.all([
            AsyncStorage.getItem(STATS_KEY),
            AsyncStorage.getItem(PROFILE_KEY),
          ]);
          if (!alive) return;

          if (statsRaw) setStats(JSON.parse(statsRaw));
          else setStats({ recipesCooked: 0, ingredientsBought: 0 });

          if (profileRaw) setProfile(JSON.parse(profileRaw));
          else setProfile({ name: "Chef" });
        } catch (e) {
          console.warn("Failed to load profile data", e);
        }
      })();

      return () => {
        alive = false;
      };
    }, [])
  );

  /* ---------- Name editing ---------- */
  const openNameModal = () => {
    setDraftName(profile.name);
    setNameModalVisible(true);
  };

  const saveName = async () => {
    const trimmed = draftName.trim();
    if (!trimmed) {
      Alert.alert("Name required", "Please enter a name.");
      return;
    }
    const next: Profile = { ...profile, name: trimmed };
    setProfile(next);
    await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(next));
    setNameModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <View style={styles.iconButtonPlaceholder} />
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={styles.iconButtonPlaceholder} />
        </View>

        {/* AVATAR AREA */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarCircle}>
            <Image
              source={require("../../assets/images/default_char.png")}
              style={styles.avatarImage}
            />
          </View>

          <TouchableOpacity onPress={openNameModal} activeOpacity={0.7}>
            <View style={styles.nameRow}>
              <Text style={styles.greeting}>{profile.name}</Text>
              <Ionicons name="pencil" size={16} color="#c98b92" style={{ marginLeft: 6 }} />
            </View>
          </TouchableOpacity>
          <Text style={styles.greetingSub}>Cooking Stats</Text>
        </View>

        {/* STATS CARDS */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconWrap}>
              <Ionicons name="restaurant" size={28} color="#f29f9b" />
            </View>
            <Text style={styles.statNumber}>{stats.recipesCooked}</Text>
            <Text style={styles.statLabel}>Recipes{"\n"}Cooked</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconWrap}>
              <Ionicons name="cart" size={28} color="#f29f9b" />
            </View>
            <Text style={styles.statNumber}>{stats.ingredientsBought}</Text>
            <Text style={styles.statLabel}>Ingredients{"\n"}Bought</Text>
          </View>
        </View>
      </View>

      {/* NAME EDIT MODAL */}
      <Modal visible={nameModalVisible} transparent animationType="fade" onRequestClose={() => setNameModalVisible(false)}>
        <Pressable style={styles.modalBackdrop} onPress={() => setNameModalVisible(false)}>
          <View />
        </Pressable>

        <View style={styles.modalCard}>
          <View style={styles.modalHeaderRow}>
            <Text style={styles.modalTitle}>Edit Name</Text>
            <TouchableOpacity onPress={() => setNameModalVisible(false)} style={styles.sheetClose} activeOpacity={0.8}>
              <Ionicons name="close" size={22} color="#b7747c" />
            </TouchableOpacity>
          </View>

          <Text style={styles.modalLabel}>Name</Text>
          <TextInput
            value={draftName}
            onChangeText={setDraftName}
            style={styles.modalInput}
            placeholder="Your name"
            placeholderTextColor="#e0c4c4"
            autoFocus
            maxLength={30}
          />

          <View style={styles.modalButtonsRow}>
            <View />
            <View style={styles.modalButtonsRight}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={() => setNameModalVisible(false)}
                activeOpacity={0.85}
              >
                <Text style={styles.modalButtonSecondaryText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={saveName}
                activeOpacity={0.9}
              >
                <Text style={styles.modalButtonPrimaryText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProfileScreen;
