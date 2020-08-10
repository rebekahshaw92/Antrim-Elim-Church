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

  export default class BaptismScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Baptism',
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
          <Image source={require('./images/baptism.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Baptism</Text>
      <Text style={styles.MainText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
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
