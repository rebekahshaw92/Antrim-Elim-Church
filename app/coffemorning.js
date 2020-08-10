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

  export default class CoffeeMorningScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Coffee Morning',
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
          <Image source={require('./images/53149_Morning_Coffee.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Coffee Morning</Text>
      <Text style={styles.MainText}>Coffee Morning runs on Tuesday mornings from 10am – 12pm.</Text>
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
