import React, { useState, useEffect, useRef } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native"
import { Camera, CameraType } from "expo-camera"

export default function App() {
  const [hasPermission, setHasPermission] = useState<any>()
  const [cameraRef, setCameraRef] = useState<any>()
  const [photo, setPhoto] = useState<any>()

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true, skipProcessing: true }
      const photoData = await cameraRef.takePictureAsync(options)
      setPhoto(photoData.uri)
    }
  }

  const renderCamera = () => {
    return (
      <Camera
        style={styles.camera}
        type={CameraType.back}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={takePicture}
          ></TouchableOpacity>
        </View>
      </Camera>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {hasPermission ? renderCamera() : <Text>No access to camera</Text>}
      </View>
      {photo && <Image source={{ uri: photo }} style={styles.preview} />}
    </View>
  )
}
// get window width
const windowWidth = Dimensions.get("window").width
// get window height: ,

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  camera: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  cameraButtonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  cameraButton: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 50,
    alignSelf: "center",
  },
  preview: {
    width: 200,
    height: 300,
    marginTop: 20,
    alignSelf: "center",
  },
})
