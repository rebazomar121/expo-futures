import React, { useEffect } from "react"

import { View, Text } from "react-native"
import * as Notifications from "expo-notifications"

const Notification = () => {
  // Request permission to receive push notifications
  const registerForPushNotifications = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }

    if (finalStatus !== "granted") {
      console.log("Failed to get push token for push notification!")
      return
    }
    // Retrieve the Expo push notification token
    const token = (await Notifications.getExpoPushTokenAsync()).data
    console.log("Expo push notification token:", token)
  }
  useEffect(() => {
    registerForPushNotifications()
  }, [])

  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification
