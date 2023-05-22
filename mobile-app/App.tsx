import React from "react"
import { StyleSheet, Text, View } from "react-native"

import Camera from "./pages/Camera"
import Notification from "./pages/Notification"
import BarcodeScanner from "./pages/BarcodeScanner"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Camera /> */}
      {/* <Notification /> */}
      <BarcodeScanner />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
