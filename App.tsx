// App.tsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeScreen from "./app/index";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <HomeScreen />
    </>
  );
}
