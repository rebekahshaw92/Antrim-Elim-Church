import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView, 
    TouchableOpacity,
    Linking,
    ImageBackground
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';

  export default class GiveScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Give',
         headerRight: () => (
         <Icon name="ios-search" color="#fff" size={30} style={{paddingRight: 20}}
         onPress={() => navigation.navigate('Search')}/>
          ),
           headerTitleStyle:{
             color: "white",
             alignSelf: "center",
             fontSize: 20        
           }, 
           headerStyle:{
             backgroundColor: "#404042"
          },
          headerTintColor: 'white'
        }
      }
      render() {
        return (
          <ScrollView>
          <View style={{flex:1}}>
          <Image source={require('./images/give.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Give</Text>
      <Text style={styles.MainText}>If you would like to give to out church then simply download the Givt app from either the Google Play Store or App Store on ios.</Text>
      <Text style={styles.MainText}>Once the app has been download and you have made an account simple enter the amount that you would like to give and search for Antrim Elim.</Text>

      <Text style={styles.TextContainer}>Download Givt</Text>
      <View style={{flexDirection: 'row', paddingLeft: 30}}>
      <TouchableOpacity onPress={() => Linking.openURL('https://apps.apple.com/gb/app/givt/id1181435988')}>
      <Image source={require('./images/app-store-png-logo-331152.png')} 
          style={{height: 50, width: 180}}
      />
      </TouchableOpacity>
      <View style={{paddingLeft: 10}}>
      <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=net.givtapp.droid2&hl=en_GB')}>
      <Image source={require('./images/app-store-png-logo-33115.png')} 
          style={{height: 50, width: 180}}
      />
      </TouchableOpacity>
      </View>
          </View>
              </View>
              </ScrollView>
        )

  }     
}

const styles = StyleSheet.create({
    TextContainer: {
     fontSize: 20,
     padding: 10,
     paddingTop: 20,
     marginLeft: 20,
     color: '#E8AA65',
     fontWeight: 'bold',
   },

   MainText: {
    fontSize: 16,
    padding: 10,
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify'
  },

});