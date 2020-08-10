import React from 'react';
import { connect } from 'react-redux';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from "react-native-push-notification";

export const APNContext: React.Context<any> = React.createContext({
    configure: () => { }
  });
  
  export const useApn = () => React.useContext(APNContext);
  
  export const APNManagerWrapped = (props: any) => {
  
    const configure = () => {
      PushNotification.configure({
        onRegister: function (tokenData) {
          const { token } = tokenData;
          const fetch = require('node-fetch');
          fetch('/apn/save', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              token: props.authToken,
              deviceToken: token,
            })
          })
            .catch(e => {
            });
        },
        onNotification: function (notification) {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        permissions: {
          alert: true,
          badge: true,
          sound: true
        },
        popInitialNotification: true,
        requestPermissions: true
      });
    }
  
    return (
      <APNContext.Provider value={{
        configure: configure,
      }}>
        {props.children}
      </APNContext.Provider>
    );
  }
  
  const mapStateToProps = (state: any, ownProps: any) => ({
    authToken: state.account.authToken,
  });
  
  export const APNManager = connect(
    mapStateToProps,
    null,
  )(APNManagerWrapped);
  
  export default APNManager;