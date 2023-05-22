const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const { Expo } = require("expo-server-sdk")

const app = express()
const expo = new Expo()
const deviceToken = "deviceToken"
const message = {
  to: deviceToken,
  sound: "default",
  body: "labar dli kak mirko",
  data: { additionalData: "optional" },
}

app.use(bodyParser.json())
app.use(cors())

const checkIsValidToken = async () => {
  try {
    const isExpoPushToken = Expo.isExpoPushToken(deviceToken)
    if (!isExpoPushToken) {
      console.error("Invalid Expo Push Token")
      return false
    }
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

const sendMessage = async () => {
  try {
    if (!(await checkIsValidToken())) return
    const ticket = await expo.sendPushNotificationsAsync([message])
    console.log(ticket)
  } catch (error) {
    console.error(error)
  }
}
// sendMessage()

app.listen("1453", () => {
  console.log("Server is running on port 1453")
})
