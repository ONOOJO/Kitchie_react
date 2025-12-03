import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffe9dc",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffd9c9",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#f2876d",
  },
  headerRight: {
    width: 36,
    alignItems: "flex-end",
  },
  subtitle: {
    fontSize: 14,
    color: "#b7867c",
    marginBottom: 12,
  },
  listWrapper: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: "#fff7f1",
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  listContent: {
    paddingVertical: 4,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#ffe6d5",
    borderRadius: 18,
    marginBottom: 8,
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "column",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#f16f5c",
  },
  itemSub: {
    fontSize: 13,
    color: "#b7867c",
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  modalCard: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: "#fff7f1",
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f2876d",
    marginBottom: 12,
  },
  modalLabel: {
    fontSize: 13,
    color: "#b7867c",
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    borderRadius: 14,
    backgroundColor: "#ffe6d5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: "#7a4d45",
  },
  modalButtonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 18,
    gap: 10,
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  modalButtonSecondary: {
    backgroundColor: "#ffe6d5",
  },
  modalButtonPrimary: {
    backgroundColor: "#f2876d",
  },
  modalButtonSecondaryText: {
    color: "#b7867c",
    fontWeight: "600",
  },
  modalButtonPrimaryText: {
    color: "#ffe9dc",
    fontWeight: "700",
  },
});
