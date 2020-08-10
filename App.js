/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Button, View} from 'react-native';
import {Notifications} from 'react-native-notifications';

import HomeStack from './app/nav';


// let someLocalNotification = Notifications.postLocalNotification({
//   body: "Local notification!",
//   title: "Local Notification Title",
//   sound: "chime.aiff",
//   category: "SOME_CATEGORY",
//   userInfo: { }
// });

// Notifications.cancelLocalNotification(someLocalNotification);

 export default class App extends React.Component {
  constructor(props) {
    super(props);
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({alert: false, sound: false, badge: false});
    });

    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });

    someLocalNotification = Notifications.postLocalNotification({
 body: "Local notification!",
  title: "Local Notification Title",
  sound: "chime.aiff",
  category: "SOME_CATEGORY",
   userInfo: { }
 });

   render() {
    return (
      <>
 
    <HomeStack />
    <View>
    <Button  
             onPress={this.someLocalNotification}  
             title="Press Me"  
                    /> 
   </View>
      </>
    )
   }   
}