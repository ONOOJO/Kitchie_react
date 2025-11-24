import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe7d8",
  },
  headerRow: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoText: {
    fontSize: 42,
    fontWeight: "700",
    color: "#f5a39e",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    padding: 6,
  },

  // Kitchen
  kitchenArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  // Current Grocery Items (View)
  produce: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
  },

  // Milk bottle
  milkBottle: {
    width: 40,
    height: 45,
  },

  // Carrot
  carrot: {
    width: 28,
    height: 64,
    borderRadius: 14,
  },

  // Soy Sauce
  soySauce: {
    width: 36,
    height: 64,
    borderRadius: 24,
  },

  // Egg
  egg: {
    width: 50,
    height: 60,
    borderRadius: 30,
  },

  cabinetRow: {
    marginTop: 18,
    flexDirection: "row",
  },
  cabinetLeft: {
    flex: 1,
    height: 80,
    backgroundColor: "transparent",
  },
  cabinetRight: {
    width: 350,
    height: 90,
    backgroundColor: "#f9c9a1",
    borderRadius: 18,
    padding: 10,
    justifyContent: "space-between",
  },
  cabinetDrawer: {
    height: 24,
    borderRadius: 12,
    backgroundColor: "#f7b58e",
  },
  cabinetDoor: {
    height: 34,
    borderRadius: 12,
    backgroundColor: "#f7b58e",
  },

  // Bottom tabs
  tabBarWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    paddingTop: 12,
    backgroundColor: "#f7b7a3",
  },
  tabBar: {
    flexDirection: "row",
    height: 80,
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
