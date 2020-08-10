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

  export default class YouthScreen extends React.Component  {
    static navigationOptions =  ({ navigation }) => {
      return {
        headerTitle: 'Youth',
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
          <Image source={require('./images/youth.png')} 
          style={{height: 200, width: '100%'}}
      />
      <Text style={styles.TextContainer}>Youth</Text>
      <Text style={styles.MainText}>Refuge Youth meets every Friday night in the ‘basement’ from 7:30 – 9:30pm.  All young people from Year 8 upwards are welcome to join us. We love meeting together to play some pool, hang out, munch on tuck shop goodies and get the odd pizza delivered.  Our main focus though, is to grow in our knowledge and relationship with Jesus through worship and teaching and through many other practical and fun ways</Text>
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