import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView, 
    TouchableOpacity,
    ImageBackground
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';

  export default class DinersScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Seniors Diners Club',
         headerRight:  () => (
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
          <Image source={require('./images/DINERSCLUB.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Seniors Diners Club</Text>
      <Text style={styles.MainText}>The Diners Club meets the first Monday of every month, September to June.  This club is open to all people over the age of 60 to enjoy lunch and some entertainment.  Attendees are asked to make a small contribution towards expenses. They group also enjoy an annual trip outing.</Text>
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