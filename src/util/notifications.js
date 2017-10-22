// External Dependencies
import { AsyncStorage, AlertIOS } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

// Local Helper functions 

const getLocalNotification = () => ({
  title: 'Reminder',
  body: '👋 Remember to take your quiz today!',
  ios: {
    sound: true,
  },
})

const getSchedulingOptions = () => {
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(18, 0, 0)

  return {
    time: tomorrow,
    repeat: 'day',
  }
}

const getNotificationPermission = async () => {
  const { status } = await Permissions.askAsync(
    Permissions.NOTIFICATIONS
  )
 return status === 'granted'
}

const getNotificationSchedule = () => {
  Notifications.scheduleLocalNotificationAsync(
    getLocalNotification(),
    getSchedulingOptions(),
  )
}

// Exported functions

exports.listenForNotifications = () => {
  Notifications.addListener(({ origin }) => {
    if (origin === 'received') {
      const { title, body } = getLocalNotification()
      AlertIOS.alert(title, body);
    }
  })
}

exports.clearLocalNotification = () => (
  AsyncStorage
    .removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
)

exports.setLocalNotification = async() => {
  const result = await AsyncStorage.getItem(NOTIFICATION_KEY)

  if (JSON.parse(result) === null) {
    const isGranted = getNotificationPermission()
    
    if (isGranted) {
      getNotificationSchedule()
      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
}