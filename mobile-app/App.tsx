import React from "react"
import { StyleSheet, Text, View } from "react-native"

import Camera from "./pages/Camera"
import Notification from "./pages/Notification"
import BarcodeScanner from "./pages/BarcodeScanner"
import Print from "./pages/Print"
import LocalAuth from "./pages/LocalAuth"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Camera /> */}
      {/* <Notification /> */}
      {/* <BarcodeScanner /> */}
      {/* <Print /> */}
      <LocalAuth />
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
