import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView, 
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';

  export default class PastorScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'The Pastor',
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
          <Image source={require('./images/pastorfamily.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Meet Our Pastor</Text>
      <Text style={styles.MainText}>Pastor John and Hannah joined Antrim Elim in October 2018 with their two teenage boys Joel and Caleb. John grew up in Bangor and attended Bangor Elim from birth. Hannah’s parents were Elim missionaries in Thailand and she grew up oversees before returning to live in N Ireland at the age of 18. Together they have served the Lord in Iowa – USA, Bangor Elim, Knockbracken Elim and South Belfast Elim before moving to Antrim in October 2018.</Text>
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
