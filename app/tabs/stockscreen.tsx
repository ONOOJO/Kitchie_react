import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { FC, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../../styles/stockscreen.styes";

type Ingredient = {
  id: string;
  name: string;
  quantity: string;
  unit?: string;
};

const ingredientImages: Record<string, any> = {
  milk: require("../../assets/images/Milk.png"),
  carrot: require("../../assets/images/Carrot.png"),
  "soy sauce": require("../../assets/images/Soy_sauce.png"),
  egg: require("../../assets/images/Egg.png"),
};

const defaultIngredientImage = require("../../assets/images/default.png"); // optional

const getIngredientImage = (name: string) => {
  const key = name.trim().toLowerCase();
  return ingredientImages[key] || defaultIngredientImage;
};


const initialData: Ingredient[] = [
  { id: "1", name: "Milk", quantity: "2", unit: "x" },
  { id: "2", name: "Carrot", quantity: "5", unit: "x" },
  { id: "3", name: "Soy Sauce", quantity: "1", unit: "x" },
  { id: "4", name: "Egg", quantity: "12", unit: "x" },
];

const StockScreen: FC = () => {
  const router = useRouter();

  const [ingredients, setIngredients] = useState<Ingredient[]>(initialData);
  const [selectedItem, setSelectedItem] = useState<Ingredient | null>(null);
  const [editName, setEditName] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editUnit, setEditUnit] = useState("");

  const openEdit = (item: Ingredient) => {
    setSelectedItem(item);
    setEditName(item.name);
    setEditQuantity(item.quantity);
    setEditUnit(item.unit || "");
  };

  const closeEdit = () => {
    setSelectedItem(null);
    setEditName("");
    setEditQuantity("");
    setEditUnit("");
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
              unit: editUnit.trim(),
            }
          : ing
      )
    );

    closeEdit();
  };

const renderItem = ({ item }: { item: Ingredient }) => {
  const imageSource = getIngredientImage(item.name);

  return (
    <TouchableOpacity
      style={styles.itemCard}
      activeOpacity={0.8}
      onPress={() => openEdit(item)}
    >
      <View style={styles.itemLeftRow}>
        <Image source={imageSource} style={styles.itemImage} />
        <View style={styles.itemRightText}>
          <Text style={styles.itemSub}>
            {item.quantity} {item.unit}
          </Text>
        </View>
      </View>

      {/* <Feather name="edit-3" size={20} color="#f29f9b" /> */}
    </TouchableOpacity>
  );
};



  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Ionicons name="chevron-back" size={24} color="#f29f9b" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Inventory</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="plus" size={22} color="#f29f9b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* SUBTITLE */}
        <Text style={styles.subtitle}>
          All the ingredients you currently have in Kitchie.
        </Text>

        {/* LIST */}
        <FlatList
          data={ingredients}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={4} // 4 items per row
          columnWrapperStyle={styles.row} // style for each row
          contentContainerStyle={styles.listContent}
        />


        {/* EDIT MODAL */}
        <Modal
          visible={!!selectedItem}
          transparent
          animationType="fade"
          onRequestClose={closeEdit}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Edit Ingredient</Text>

              <Text style={styles.modalLabel}>Name</Text>
              <TextInput
                value={editName}
                onChangeText={setEditName}
                style={styles.input}
                placeholder="Ingredient name"
                placeholderTextColor="#cfa9a5"
              />

              <Text style={styles.modalLabel}>Quantity</Text>
              <TextInput
                value={editQuantity}
                onChangeText={setEditQuantity}
                style={styles.input}
                placeholder="Amount"
                placeholderTextColor="#cfa9a5"
                keyboardType="numeric"
              />

              <View style={styles.modalButtonsRow}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonSecondary]}
                  onPress={closeEdit}
                >
                  <Text style={styles.modalButtonSecondaryText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonPrimary]}
                  onPress={saveEdit}
                >
                  <Text style={styles.modalButtonPrimaryText}>Save</Text>
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

