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

  export default class FoodbankScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Foodbank',
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
          <Image source={require('./images/foodbank.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Foodbank</Text>
      <Text style={styles.MainText}>The Food Bank operates every Tuesday morning from 11am – 1pm.  As well as collecting food, please stay and enjoy a free hot drink and something sweet – we are also available to pray with people as and when requested.  The Food Bank is part of the Trussel Trust and manned by trained volunteers from Antrim Elim.</Text>
      <Text style={styles.MainText}>Due to Covid-19 all church activities no longer run within the church buildings – HOWEVER – the food bank still operates from 11am – 1pm on Tuesday mornings. We ask that everyone respects social distancing and the guidelines set out on arrival to the church car park.</Text>
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
