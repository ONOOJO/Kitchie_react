import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /* =========================
   * LAYOUT / SCREEN
   * ========================= */
  safeArea: {
    flex: 1,
    backgroundColor: "#fff5f0",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  /* =========================
   * HEADER (matches recipe screen)
   * ========================= */
  headerRow: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#f29f9b",
    letterSpacing: 0.3,
  },
  iconButtonPlaceholder: {
    width: 38,
    height: 38,
  },

  /* =========================
   * AVATAR SECTION
   * ========================= */
  avatarSection: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  avatarCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "rgba(242,159,155,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    overflow: "hidden",
  },
  avatarImage: {
    width: 100,
    height: 200,
    borderRadius: 48,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    fontSize: 22,
    fontWeight: "900",
    color: "#b7747c",
  },
  greetingSub: {
    fontSize: 14,
    fontWeight: "700",
    color: "#c98b92",
    marginTop: 4,
  },

  /* =========================
   * STATS ROW
   * ========================= */
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: "rgba(255,255,255,0.65)",
    borderRadius: 20,
  },
  statIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "rgba(242,159,155,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "900",
    color: "#b7747c",
  },
  statLabel: {
    fontSize: 13,
    fontWeight: "800",
    color: "#c98b92",
    textAlign: "center",
    marginTop: 4,
    lineHeight: 17,
  },

  /* =========================
   * MODAL (matches app style)
   * ========================= */
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  modalCard: {
    position: "absolute",
    left: 12,
    right: 12,
    top: 200,
    borderRadius: 18,
    backgroundColor: "#ffe9dc",
    padding: 14,
  },
  modalHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#b7747c",
  },
  sheetClose: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.65)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalLabel: {
    fontSize: 13,
    fontWeight: "900",
    color: "#b7747c",
    marginBottom: 6,
  },
  modalInput: {
    height: 42,
    borderRadius: 14,
    paddingHorizontal: 12,
    backgroundColor: "rgba(255,255,255,0.75)",
    color: "#b7747c",
    fontWeight: "800",
  },
  modalButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
  },
  modalButtonsRight: {
    flexDirection: "row",
    gap: 10,
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
  },
  modalButtonSecondary: {
    backgroundColor: "rgba(255,255,255,0.65)",
  },
  modalButtonPrimary: {
    backgroundColor: "#f29f9b",
  },
  modalButtonSecondaryText: {
    color: "#b7747c",
    fontWeight: "900",
  },
  modalButtonPrimaryText: {
    color: "#ffe9dc",
    fontWeight: "900",
  },
});
