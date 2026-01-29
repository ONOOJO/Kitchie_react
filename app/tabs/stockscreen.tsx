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
  const [modalVisible, setModalVisible] = useState(false);

  const openEdit = (item: Ingredient) => {
    setSelectedItem(item);
    setEditName(item.name);
    setEditQuantity(item.quantity);
    setEditUnit(item.unit || "");
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
  setSelectedItem(null);        // important: means ADD mode
  setEditName("");
  setEditQuantity("");
  setEditUnit("x");             // default unit if you want
  setModalVisible(true);
};

const isEditMode = !!selectedItem;


const addIngredient = () => {   // Add new ingredients
  const name = editName.trim();
  const qty = editQuantity.trim();

  if (!name || !qty) return;

  const newItem: Ingredient = {
    id: Date.now().toString(),
    name,
    quantity: qty,
    unit: editUnit.trim() || "x",
  };

  setIngredients((prev) => [...prev, newItem]);
  closeEdit();
};


  const saveEdit = () => {      // Edit existing ingredients
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

  const deleteIngredient = () => {  // Delete existing ingredients
  if (!selectedItem) return;

  setIngredients((prev) => prev.filter((ing) => ing.id !== selectedItem.id));
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
            <TouchableOpacity onPress= {openAdd} style={styles.iconButton}>
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
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={closeEdit}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}> {isEditMode ? "Edit Ingredient" : "Add Ingredient"}</Text>

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

              {/* LEFT: Delete */}
              <View style={styles.modalButtonsRow}> 
                {isEditMode && (
                    <TouchableOpacity
                      style={[styles.modalButton, styles.modalButtonDanger]}
                      onPress={deleteIngredient}
                    >
                      <Text style={styles.modalButtonDangerText}>Delete</Text>
                    </TouchableOpacity>
                  )}
                  {/* RIGHT: Cancel + Save */}
                  <View style={styles.modalButtonsRight}>  
                    <TouchableOpacity
                      style={[styles.modalButton, styles.modalButtonSecondary]}
                      onPress={closeEdit}
                    >
                      <Text style={styles.modalButtonSecondaryText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.modalButton, styles.modalButtonPrimary]}
                      onPress={isEditMode ? saveEdit : addIngredient}
                    >
                      <Text style={styles.modalButtonPrimaryText}>
                        {isEditMode ? "Save" : "Add"}
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default StockScreen;

