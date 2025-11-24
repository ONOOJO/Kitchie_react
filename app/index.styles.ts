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
  applianceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  microwave: {
    width: "56%",
    height: 110,
    backgroundColor: "#ffeedd",
    borderRadius: 24,
    padding: 14,
    justifyContent: "space-between",
  },
  microwaveScreen: {
    flex: 1,
    backgroundColor: "#f7cdb4",
    borderRadius: 16,
  },
  microwaveButtons: {
    marginTop: 8,
    height: 22,
    backgroundColor: "#fbd7c3",
    borderRadius: 10,
  },
  toaster: {
    width: "38%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  toasterTop: {
    width: "85%",
    height: 28,
    backgroundColor: "#f3aa9c",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  toasterBody: {
    width: "90%",
    height: 70,
    backgroundColor: "#ffeedd",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -4,
  },

  shelf: {
    marginTop: 12,
    backgroundColor: "#fff2e4",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shelfItem: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: 60,
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

  // Herb
  herb: {
    width: 36,
    height: 64,
    borderRadius: 24,
    backgroundColor: "#a4d49a",
  },

  // Fish
  fishBody: {
    width: 50,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#c1bccf",
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
    width: 130,
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
