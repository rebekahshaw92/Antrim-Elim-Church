import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from "react-native-push-notification";

const configure = () => {
 PushNotification.configure({

   onRegister: (token) => {
    console.log('TOKEN:', token);
     //process token
   },

   onNotification: (notification) => {
     // process the notification
     console.log("NOTIFICATION:", notification);
     // required on iOS only
     notification.finish(PushNotificationIOS.FetchResult.NoData);
   },

   permissions: {
     alert: true,
     badge: true,
     sound: true
   },
   senderID: "176135408654",
   popInitialNotification: true,
   requestPermissions: true,

 });
};

// const localNotification = () => {
//     PushNotification.localNotification({
//       autoCancel: true,
//       bigText: "My big text that will be shown when notification is expanded",
//       subText: "This is a subText",
//       color: "green",
//       vibrate: true,
//       vibration: 300,
//       title: "Notification Title",
//       message: "Notification Message",
//       playSound: true,
//       soundName: 'default',
//       actions: '["Accept", "Reject"]',
//     });
//    };
   
   export {
    configure,
    // localNotification,
   };