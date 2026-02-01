// app/(tabs)/stockscreen.tsx
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { FC, useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/stockscreen.styles";

import { getIngredientImage } from "../../src/ingredientImages";

type Ingredient = {
  id: string;
  name: string;
  quantity: string;
  unit?: string;
};

const STORAGE_KEY = "kitchie.ingredients.v1";

// helpers
const normalize = (s: string) => s.trim().toLowerCase();

const parseNumber = (v: unknown) => {
  const n = Number(String(v ?? "").replace(",", ".").trim());
  return Number.isFinite(n) ? n : 0;
};

const formatNumber = (n: number) => {
  if (!Number.isFinite(n)) return "0";
  const rounded = Math.round(n * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
};

const StockScreen: FC = () => {
  const router = useRouter();

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedItem, setSelectedItem] = useState<Ingredient | null>(null);

  const [editName, setEditName] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editUnit, setEditUnit] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  // ✅ LOAD whenever screen is focused (so Recipes can update inventory and this will reflect it)
  useFocusEffect(
    useCallback(() => {
      let alive = true;

      (async () => {
        try {
          const raw = await AsyncStorage.getItem(STORAGE_KEY);
          if (!alive) return;

          const data: Ingredient[] = raw ? JSON.parse(raw) : [];
          setIngredients(Array.isArray(data) ? data : []);
        } catch (e) {
          console.warn("Failed to load ingredients", e);
          if (!alive) return;
          setIngredients([]);
        }
      })();

      return () => {
        alive = false;
      };
    }, [])
  );

  // SAVE whenever ingredients changes
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ingredients));
      } catch (e) {
        console.warn("Failed to save ingredients", e);
      }
    })();
  }, [ingredients]);

  const openEdit = (item: Ingredient) => {
    setSelectedItem(item);
    setEditName(item.name);
    setEditQuantity(item.quantity);
    setEditUnit(item.unit || "x");
    setModalVisible(true);
  };

  const closeEdit = () => {
    setModalVisible(false);
    setSelectedItem(null);
    setEditName("");
    setEditQuantity("");
    setEditUnit("");
  };

  const openAdd = () => {
    setSelectedItem(null);
    setEditName("");
    setEditQuantity("");
    setEditUnit("x");
    setModalVisible(true);
  };

  const isEditMode = !!selectedItem;

  // ✅ Add: merge duplicates by (normalized name + unit) instead of creating another record
  const addIngredient = () => {
    const nameRaw = editName.trim();
    const unitRaw = (editUnit.trim() || "x").toLowerCase();
    const qtyToAdd = parseNumber(editQuantity);

    if (!nameRaw || qtyToAdd <= 0) return;

    const nameKey = normalize(nameRaw);

    setIngredients((prev) => {
      const existingIndex = prev.findIndex(
        (ing) =>
          normalize(ing.name) === nameKey && (ing.unit?.toLowerCase() || "x") === unitRaw
      );

      if (existingIndex !== -1) {
        const existing = prev[existingIndex];
        const existingQty = parseNumber(existing.quantity);
        const nextQty = existingQty + qtyToAdd;

        const updated: Ingredient = {
          ...existing,
          quantity: formatNumber(nextQty),
          unit: unitRaw,
        };

        const copy = [...prev];
        copy[existingIndex] = updated;
        return copy;
      }

      const newItem: Ingredient = {
        id: Date.now().toString(),
        name: nameRaw,
        quantity: formatNumber(qtyToAdd),
        unit: unitRaw,
      };

      return [...prev, newItem];
    });

    closeEdit();
  };

  const saveEdit = () => {
    if (!selectedItem) return;

    setIngredients((prev) =>
      prev.map((ing) =>
        ing.id === selectedItem.id
          ? {
              ...ing,
              name: editName.trim() || ing.name,
              quantity: editQuantity.trim() || ing.quantity,
              unit: (editUnit.trim() || "x").toLowerCase(),
            }
          : ing
      )
    );

    closeEdit();
  };

  const deleteIngredient = () => {
    if (!selectedItem) return;
    setIngredients((prev) => prev.filter((ing) => ing.id !== selectedItem.id));
    closeEdit();
  };

  const renderItem = ({ item }: { item: Ingredient }) => {
    return (
      <TouchableOpacity
        style={styles.itemCard}
        activeOpacity={0.8}
        onPress={() => openEdit(item)}
      >
        <View style={styles.itemLeftRow}>
          <Image source={getIngredientImage(item.name)} style={styles.itemImage} />
          <View style={styles.itemRightText}>
            <Text style={styles.itemSub}>
              {item.quantity} {item.unit}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.iconButton}
            activeOpacity={0.8}
          >
            <Ionicons name="chevron-back" size={24} color="#f29f9b" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Inventory</Text>

          <TouchableOpacity onPress={openAdd} style={styles.iconButton} activeOpacity={0.8}>
            <Ionicons name="add" size={24} color="#f29f9b" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Look at our assortment of deliciousness.</Text>

        <FlatList
          data={ingredients}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={4}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.subtitle}>No ingredients yet. Tap + to add one.</Text>
          }
        />

        {/* MODAL */}
        <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={closeEdit}>
          <Pressable style={styles.modalBackdrop} onPress={closeEdit}>
            <View />
          </Pressable>

          <View style={styles.invModalCard}>
            <View style={styles.createHeaderRow}>
              <Text style={styles.createTitle}>
                {isEditMode ? "Edit Ingredient" : "Add Ingredient"}
              </Text>

              <TouchableOpacity onPress={closeEdit} style={styles.sheetClose} activeOpacity={0.8}>
                <Ionicons name="close" size={22} color="#b7747c" />
              </TouchableOpacity>
            </View>

            <Text style={styles.createLabel}>Name</Text>
            <TextInput
              value={editName}
              onChangeText={setEditName}
              style={styles.createInput}
              placeholder="What goodies?"
              placeholderTextColor="#b7747c"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={[styles.createLabel, { marginTop: 12 }]}>Quantity</Text>
            <TextInput
              value={editQuantity}
              onChangeText={setEditQuantity}
              style={styles.createInput}
              placeholder="Amount"
              placeholderTextColor="#b7747c"
              keyboardType="numeric"
            />

            <Text style={[styles.createLabel, { marginTop: 12 }]}>Unit</Text>
            <TextInput
              value={editUnit}
              onChangeText={setEditUnit}
              style={styles.createInput}
              placeholder="x"
              placeholderTextColor="#b7747c"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <View style={styles.modalButtonsRow}>
              {isEditMode ? (
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonDanger]}
                  onPress={deleteIngredient}
                  activeOpacity={0.85}
                >
                  <Text style={styles.modalButtonDangerText}>Delete</Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}

              <View style={styles.modalButtonsRight}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonSecondary]}
                  onPress={closeEdit}
                  activeOpacity={0.85}
                >
                  <Text style={styles.modalButtonSecondaryText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonPrimary]}
                  onPress={isEditMode ? saveEdit : addIngredient}
                  activeOpacity={0.9}
                >
                  <Text style={styles.modalButtonPrimaryText}>
                    {isEditMode ? "Save" : "Add"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default StockScreen;
