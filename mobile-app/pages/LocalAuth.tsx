import React, { useState } from "react"
import { View, Button, Text } from "react-native"
import * as LocalAuthentication from "expo-local-authentication"

const AuthenticationScreen = () => {
  const [authenticationResult, setAuthenticationResult] = useState("")

  const handleAuthenticate = async () => {
    try {
      const hasHardwareSupport = await LocalAuthentication.hasHardwareAsync()
      if (!hasHardwareSupport) {
        setAuthenticationResult("Device does not support local authentication")
        return
      }

      const isEnrolled = await LocalAuthentication.isEnrolledAsync()
      if (!isEnrolled) {
        setAuthenticationResult("Device does not have any enrolled biometrics")
        return
      }

      const result = await LocalAuthentication.authenticateAsync()
      if (result.success) {
        setAuthenticationResult("Authentication successful!")
      } else {
        setAuthenticationResult("Authentication failed")
      }
    } catch (error) {
      console.error("Error occurred during authentication:", error)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Authenticate" onPress={handleAuthenticate} />
      <Text>{authenticationResult}</Text>
    </View>
  )
}

export default AuthenticationScreen
