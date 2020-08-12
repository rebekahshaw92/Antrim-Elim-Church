/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {Notifications} from 'react-native-notifications';

import HomeStack from './app/nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({alert: true, sound: false, badge: true});
    });

    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });
  }
  someLocalNotification = Notifications.postLocalNotification({
  body: 'Local notification!',
  title: 'Local Notification!',
  //sound: "chime.aiff",
  category: 'SOME_CATEGORY',
  userInfo: {},
});

render() {
return <View style={{ flex: 1 }}><HomeStack /></View>    
}
}



