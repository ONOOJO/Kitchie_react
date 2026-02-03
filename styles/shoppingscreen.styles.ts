import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /* =========================
   * LAYOUT / SCREEN
   * ========================= */
  safeArea: {
    flex: 1,
    backgroundColor: "#ffe9dc",
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 10,
  },

  /* =========================
   * HEADER (matches recipe screen)
   * ========================= */
  headerRow: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#f29f9b",
    letterSpacing: 0.2,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.65)",
    alignItems: "center",
    justifyContent: "center",
  },
});
